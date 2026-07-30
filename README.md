# Noemi Tomassetti - Virtual Assistant Website

Official website and digital presence for **Noemi Tomassetti - Assistente Virtuale per Professionisti e Piccole Aziende** ([noemitomassetti.it](https://www.noemitomassetti.it/)).

Built with React 18, TypeScript, Vite, Tailwind CSS, Radix UI (shadcn/ui), and optimized for performance, SEO, accessibility, and conversion rate optimization (CRO).

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Tech Stack & Technologies Used](#-tech-stack--technologies-used)
- [Project Architecture & Structure](#-project-architecture--structure)
- [Key Features & Components](#-key-features--components)
- [SEO & Technical Optimization](#-seo--technical-optimization)
  - [Dynamic Head & Metadata](#dynamic-head--metadata)
  - [Structured Data (JSON-LD Schema.org)](#structured-data-json-ld-schemaorg)
  - [Sitemap & Robots.txt](#sitemap--robotstxt)
  - [E-E-A-T & Topical Authority](#e-e-a-t--topical-authority)
- [Performance & UX Optimizations](#-performance--ux-optimizations)
- [Deployment & GitHub Workflow](#-deployment--github-workflow)
  - [Local Development](#local-development)
  - [Vercel Deployment](#vercel-deployment)
  - [GitHub Synchronization](#github-synchronization)
- [Verification & Health Checks](#-verification--health-checks)

---

## 🚀 Project Overview

This website serves as a high-converting lead generation platform for Noemi Tomassetti, offering Virtual Assistant, Executive Support, Multilingual Back-Office (Italian, English, French, Spanish), Course Support, and Content Translation services to Italian solopreneurs, consultants, course creators, and small businesses.

Primary Conversion Goal: Drive qualified leads to schedule a free 30-minute introductory videocall or submit a project inquiry through GDPR-compliant forms.

---

## 🛠 Tech Stack & Technologies Used

- **Framework & Core**: React 18, TypeScript, Vite 5
- **Styling & Design System**: Tailwind CSS 3, `@tailwindcss/typography`, Tailwind Animate, CSS Variables with OKLCH / HSL palette
- **UI Components**: Radix UI primitives, shadcn/ui components, Lucide React icons
- **Routing**: `react-router-dom` (v6) with client-side hash navigation and deep links (`/blog`, `/blog/:slug`, `/risorse`, `/privacy-policy`, `/cookie-policy`)
- **State & Data Fetching**: `@tanstack/react-query`, `react-hook-form`, `zod`
- **Testing & Quality Assurance**: Vitest, React Testing Library, ESLint, TypeScript (`tsc --noEmit`)

---

## 📁 Project Architecture & Structure

```text
├── public/
│   ├── favicon.svg & favicon.png  # Brand identity favicons
│   ├── robots.txt                 # Search engine directives & sitemap location
│   ├── sitemap.xml                # Canonical XML sitemap with dynamic URLs
│   └── placeholder.svg
├── src/
│   ├── components/
│   │   ├── BookingButton.tsx      # Modal booking component with slot picker
│   │   ├── Layout.tsx             # Global layout wrapper (Header, Nav, Footer)
│   │   ├── NavLink.tsx            # Navigation link helper with active states
│   │   └── ui/                    # Accessible shadcn/ui primitives (Accordion, Dialog, Input, etc.)
│   ├── hooks/
│   │   ├── useSEO.ts              # Dynamic SEO, meta tags, canonicals, hreflang & schema injector
│   │   ├── use-toast.ts           # Toast notifications system
│   │   └── use-mobile.tsx         # Responsive media query hook
│   ├── lib/
│   │   ├── blogData.ts            # Blog post content, metadata, and accessor utilities
│   │   ├── translations.ts        # UI copy & structural data dictionary
│   │   └── utils.ts               # Class merging helpers (clsx + tailwind-merge)
│   ├── pages/
│   │   ├── Index.tsx              # Main homepage (Hero, Services, Targets, Pricing, FAQ, Contact)
│   │   ├── Blog.tsx               # Blog archive page with search/filtering
│   │   ├── BlogPost.tsx           # Individual blog post article page with Schema & Lead Capture
│   │   ├── Risorse.tsx            # Client resources & tools page
│   │   ├── PrivacyPolicy.tsx      # GDPR Privacy Policy
│   │   ├── CookiePolicy.tsx       # Cookie Policy
│   │   └── NotFound.tsx           # 404 error page
│   ├── App.tsx                    # Route definitions, QueryClientProvider & Toaster
│   ├── index.css                  # Global styles, Tailwind directives & CSS design tokens
│   ├── main.tsx                   # React root entry point
│   └── vite-env.d.ts
├── index.html                     # Pre-rendered HTML shell, preloads & initial meta tags
├── tailwind.config.ts             # Tailwind CSS theme extension
├── vite.config.ts                 # Vite bundler configuration & alias setup
├── tsconfig.json                  # TypeScript project references
└── package.json                   # Dependencies and npm scripts
```

---

## 🎯 Key Features & Components

1. **Interactive Booking Modal (`BookingButton.tsx`)**:
   - Integrated calendar slot selector for booking 30-minute free discovery calls.
   - Built-in honeypot anti-spam protection and input validation.
2. **Contact Form (`ContattiForm` in `Index.tsx`)**:
   - Double GDPR consent checkboxes (Privacy Policy + optional newsletter consent).
   - Asynchronous lead submission with tracking event dispatching.
   - Silent anti-spam bot trap.
3. **Blog Engine (`blogData.ts`, `Blog.tsx`, `BlogPost.tsx`)**:
   - SEO-optimized articles addressing high-intent Italian queries (*Disdette dell'ultimo minuto*, *Customer Care*, *Supporto Multilingue*, *Organizzare l'agenda*).
   - In-article conversion callout boxes guiding readers to book discovery calls.
   - Related post suggestions to boost dwell time and reduce bounce rates.
4. **Client Resources Hub (`Risorse.tsx`)**:
   - Highlighting recommended productivity toolstacks (Google Workspace, Notion, Asana, Canva, CRM automation).

---

## 🔍 SEO & Technical Optimization

### Dynamic Head & Metadata (`useSEO.ts`)

Every route utilizes the custom `useSEO` hook to inject and update:
- Unique, high-relevance `<title>` (under 60 chars) and `<meta name="description">` (140-160 chars).
- Canonical URL (`<link rel="canonical">`).
- Hreflang alternates (`<link rel="alternate" hreflang="it">` and `x-default`).
- OpenGraph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:locale`, `og:type`).
- Twitter Card metadata (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`).

### Structured Data (JSON-LD Schema.org)

Configured for search engine rich results and Knowledge Graph authority:
- `Organization` & `ProfessionalService` & `LocalBusiness`: Business details, contact info, area served (Italy), sameAs social links (LinkedIn, Facebook, Instagram).
- `Person`: Noemi Tomassetti author entity, job title, academic background (Degree 110/110 cum laude, Master in Translation).
- `WebSite`: Including `SearchAction` definition.
- `BreadcrumbList`: Nested breadcrumbs on internal routes and blog posts.
- `BlogPosting`: Comprehensive article schema with author, publisher, publish date, and high-res cover image.
- `FAQPage`: Rich accordion questions mapped into Google FAQ schema.
- `Service`: Detailed breakdown for each virtual assistant service offered.

### Sitemap & Robots.txt

- **`/sitemap.xml`**: Lists all main routes (`/`, `/blog`, `/risorse`, `/privacy-policy`, `/cookie-policy`) and all individual blog post permalinks.
- **`/robots.txt`**: Directs crawlers (`Allow: /`) and links directly to `Sitemap: https://www.noemitomassetti.it/sitemap.xml`.

### E-E-A-T & Topical Authority

- Emphasizes 25+ years of operational experience.
- Highlights formal linguistic qualifications (110/110 cum laude degree + Master in Specialized Translation).
- Verified client testimonials with job roles and project scopes.
- Contextual internal linking connecting blog topics to specific service sections.

---

## ⚡ Performance & UX Optimizations

- **Hero Asset Preloading**: Critical hero portrait preloaded in `index.html` with `fetchPriority="high"` to optimize Largest Contentful Paint (LCP).
- **Asynchronous Image Decoding & Lazy Loading**: Off-screen images use `loading="lazy"` and `decoding="async"`.
- **Layout Shift Prevention**: Explicit width/height dimensions on images prevent Cumulative Layout Shift (CLS).
- **Accessible Touch Targets & ARIA**: ARIA labels, semantic landmark elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<address>`, `<footer>`), and contrast-checked color tokens.
- **Spam Protection**: Silent honeypot fields on forms to block automated submissions without irritating human users with CAPTCHAs.

---

## 📦 Deployment & GitHub Workflow

### Local Development

1. **Clone repository**:
   ```bash
   git clone https://github.com/noemitomassetti/my-website.git
   cd my-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Run tests & linters**:
   ```bash
   npm run lint
   npm run test
   npx tsc --noEmit
   ```

### Vercel Deployment

This project is optimized for deployment on **Vercel** with zero backend configuration needed (Static Single Page Application with client-side routing):

1. Connect the GitHub repository (`noemitomassetti/my-website`) in Vercel.
2. Select **Vite** preset (Framework Preset).
3. Build Settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Configure domain: Ensure `www.noemitomassetti.it` points to the Vercel deployment with SSL enabled.
5. Client-Side Routing: Vercel automatically handles Single Page Application rewrites when configured or using Vite defaults.

### GitHub Synchronization

All code updates are maintained in the main branch of `noemitomassetti/my-website`. Pushing to `main` triggers automated Vercel preview/production deployments.

---

## ✅ Verification & Health Checks

Verify repository health anytime using:

```bash
npm run lint      # Runs ESLint checks
npm run test      # Runs Vitest unit tests
npm run build     # Builds dist directory
npx tsc --noEmit  # Validates TypeScript types
```

---

*Maintained by Noemi Tomassetti Virtual Assistant.*
