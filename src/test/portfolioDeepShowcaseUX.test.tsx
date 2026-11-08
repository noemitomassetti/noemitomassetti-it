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
    expect(status).toHaveTextContent("8 / 21");
    expect(screen.getAllByRole("link", { name: /Esplora il dossier completo:/ })).toHaveLength(8);

    fireEvent.click(screen.getByRole("button", { name: /Esplora tutti i dossier/ }));
    expect(status).toHaveTextContent("21 / 21");
    expect(screen.getAllByRole("link", { name: /Esplora il dossier completo:/ })).toHaveLength(21);
  });

  it("resets the expanded selection when changing filters and gives feedback", () => {
    mount();
    fireEvent.click(screen.getByRole("button", { name: /Esplora tutti i dossier/ }));
    fireEvent.click(screen.getByRole("button", { name: "Traduzioni a fronte" }));
    expect(screen.getByRole("button", { name: "Traduzioni a fronte" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("status")).toHaveTextContent("6 / 6");

    fireEvent.click(screen.getByRole("button", { name: "Tutti i dossier" }));
    expect(screen.getByRole("status")).toHaveTextContent("8 / 21");
    expect(screen.getByRole("button", { name: /Esplora tutti i dossier/ })).toHaveAttribute("aria-expanded", "false");
  });

  it("supports multilingual search, case-insensitive matching and empty results", () => {
    mount();
    const search = screen.getByRole("searchbox", { name: "Cerca nei dossier" });
    fireEvent.change(search, { target: { value: "ONBOARDING SOFTWARE" } });
    expect(screen.getByRole("status")).toHaveTextContent("1 / 1");
    expect(screen.getAllByRole("link", { name: /Esplora il dossier completo:/ })).toHaveLength(1);
    fireEvent.change(search, { target: { value: "xyz-never-a-service" } });
    expect(screen.getByRole("status")).toHaveTextContent("0 / 0");
    expect(screen.getByText(/Nessun dossier corrisponde alla ricerca/)).toBeInTheDocument();
    fireEvent.change(search, { target: { value: "" } });
    expect(screen.getByRole("status")).toHaveTextContent("8 / 21");
  });

  it("shows faithful deliverable excerpts on the featured portfolio cards", () => {
    mount();
    expect(screen.getAllByText("Anteprima dell’elaborato")).toHaveLength(8);
    expect(screen.queryByRole("button", { name: "IT → EN" })).toBeNull();
    expect(screen.queryByRole("button", { name: "IT → FR" })).toBeNull();
    expect(screen.queryByRole("button", { name: "IT → ES" })).toBeNull();
    expect(screen.getAllByText((_, element) =>
      element?.tagName.toLowerCase() === "p" && Boolean(element.textContent?.trim()) &&
      element.textContent !== "Anteprima dell’elaborato"
    ).length).toBeGreaterThanOrEqual(8);
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
