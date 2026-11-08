import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CookieBanner } from "../components/CookieBanner";
import { COOKIE_CONSENT_KEY } from "../lib/consent";

const locales = [
  { path: "/it", title: "Gestione Cookie e Privacy", decline: "Rifiuta", accept: "Accetta", policy: "Leggi la Cookie Policy completa" },
  { path: "/en", title: "Cookie & Privacy Management", decline: "Decline", accept: "Accept", policy: "Read the complete Cookie Policy" },
  { path: "/fr", title: "Gestion des Cookies et Confidentialité", decline: "Refuser", accept: "Accepter", policy: "Consulter la Politique des Cookies complète" },
  { path: "/es", title: "Gestión de Cookies y Privacidad", decline: "Rechazar", accept: "Aceptar", policy: "Leer la Política de Cookies completa" },
] as const;

beforeEach(() => localStorage.removeItem(COOKIE_CONSENT_KEY));
afterEach(() => cleanup());

describe("Cookie consent banner UX and accessibility", () => {
  it.each(locales)("shows a compact, accessible consent choice in $path", async locale => {
    render(<MemoryRouter initialEntries={[locale.path]}><CookieBanner /></MemoryRouter>);
    const dialog = await screen.findByRole("dialog", { name: locale.title });
    expect(dialog).toHaveAttribute("aria-labelledby", "cookie-consent-title");
    expect(dialog).toHaveAttribute("aria-describedby", "cookie-consent-description");

    const description = dialog.querySelector("#cookie-consent-description");
    expect(description).not.toBeNull();
    expect(description?.textContent?.length ?? Infinity).toBeLessThan(200);

    expect(within(dialog).getByRole("link", { name: locale.policy })).toBeInTheDocument();
    expect(within(dialog).getByRole("button", { name: locale.decline })).toBeInTheDocument();
    expect(within(dialog).getByRole("button", { name: locale.accept })).toBeInTheDocument();
    expect(localStorage.getItem(COOKIE_CONSENT_KEY)).toBeNull();
    expect(document.getElementById("ga-gtag-script")).toBeNull();
  });
});
