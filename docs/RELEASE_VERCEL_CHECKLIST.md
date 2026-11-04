# Vercel release verification

Deployment target: existing Vercel project `noemitomassetti-it`, production domain `www.noemitomassetti.it`.
No Cloudflare migration or DNS changes.

## Confirmed on 2026-11-03
- The GitHub review branch contains the multilingual site and blog.
- GitHub build/unit checks and Playwright site smoke checks succeeded at `ae0edcf`.
- Web3Forms dashboard test was accepted and delivered to `info@noemitomassetti.it`.
- A user-submitted quote request from the existing Vercel preview was accepted by Web3Forms and delivered to `info@noemitomassetti.it` inbox. The email content was manually checked against the test form.
- Italian blog URLs are preserved; translated article URLs and hreflang associations have automated tests.

## Release procedure
1. Confirm Vercel preview is **Ready** for the release branch's latest SHA, and visually inspect its contact, blog and language switching.
2. Check current CI is green.
3. Merge pull request #1 to `main` (production), which triggers the existing Vercel deployment.
4. Confirm **Ready** on the new production deployment and verify live `www.noemitomassetti.it`, contact form, redirects, original Italian blog URLs, and the English/French/Spanish blog routes.
5. Keep the previous production deployment available for immediate rollback.

The known Vercel build-rate-limit error at commit `ae0edcf` requires a fresh deploy attempt. This documentation-only commit intentionally triggers a new preview deployment without changing the app's runtime.
