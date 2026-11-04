import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PortfolioDeepShowcase } from "../components/PortfolioDeepShowcase";

afterEach(() => cleanup());

const mount = (lang: "it" | "en" = "it") =>
  render(<MemoryRouter><PortfolioDeepShowcase lang={lang} /></MemoryRouter>);

describe("Deep portfolio user experience", () => {
  it("shows an accessible featured selection and exposes all samples on request", () => {
    mount();
    const status = screen.getByRole("status");
    expect(status).toHaveTextContent("8 / 27");
    expect(screen.getAllByRole("link", { name: /Esplora il dossier completo:/ })).toHaveLength(8);

    fireEvent.click(screen.getByRole("button", { name: /Esplora tutti i dossier/ }));
    expect(status).toHaveTextContent("27 / 27");
    expect(screen.getAllByRole("link", { name: /Esplora il dossier completo:/ })).toHaveLength(27);
  });

  it("resets the expanded selection when changing filters and gives feedback", () => {
    mount();
    fireEvent.click(screen.getByRole("button", { name: /Esplora tutti i dossier/ }));
    fireEvent.click(screen.getByRole("button", { name: "Traduzioni a fronte" }));
    expect(screen.getByRole("button", { name: "Traduzioni a fronte" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("status")).toHaveTextContent("12 / 12");

    fireEvent.click(screen.getByRole("button", { name: "Tutti i dossier" }));
    expect(screen.getByRole("status")).toHaveTextContent("8 / 27");
    expect(screen.getByRole("button", { name: /Esplora tutti i dossier/ })).toHaveAttribute("aria-expanded", "false");
  });

  it("supports multilingual search, case-insensitive matching and empty results", () => {
    mount();
    const search = screen.getByRole("searchbox", { name: "Cerca nei dossier" });
    fireEvent.change(search, { target: { value: "SOFTWARE" } });
    expect(screen.getByRole("status")).toHaveTextContent("1 / 1");
    expect(screen.getAllByRole("link", { name: /Esplora il dossier completo:/ })).toHaveLength(1);
    fireEvent.change(search, { target: { value: "xyz-never-a-service" } });
    expect(screen.getByRole("status")).toHaveTextContent("0 / 0");
    expect(screen.getByText(/Nessun dossier corrisponde alla ricerca/)).toBeInTheDocument();
    fireEvent.change(search, { target: { value: "" } });
    expect(screen.getByRole("status")).toHaveTextContent("8 / 27");
  });

  it("identifies demonstration work honestly and provides distinct link names", () => {
    mount("en");
    expect(screen.getByRole("heading", { name: /See how I approach each service through detailed samples/ })).toBeInTheDocument();
    expect(screen.getByText(/not excerpts from commissioned work/)).toBeInTheDocument();
    const labels = screen.getAllByRole("link", { name: /Read the complete dossier:/ })
      .map(link => link.getAttribute("aria-label"));
    expect(labels).toHaveLength(8);
    expect(new Set(labels).size).toBe(8);
  });
});
