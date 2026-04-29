# Albi&Us landing page

Marketing site for [albiandus.com](https://albiandus.com). Next.js 15 App Router, TypeScript, Tailwind CSS v4. No CMS, no database — all copy lives in `src/components/`.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- `next/font` for Fraunces (display) and Inter (body)

## Local development

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:3000.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm start` — run the production build locally
- `npm run lint` — ESLint

## Environment variables

None. The site has no analytics, no forms, no API routes.

## Deploy (Vercel)

1. Push the repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new). Framework preset is auto-detected as Next.js — leave the build/output settings alone.
3. After the first deploy, in **Project Settings → Domains**:
   - Add `albiandus.com` and `www.albiandus.com`. Set DNS records as Vercel instructs.
   - Add `albiandus.co.uk` and use the "Redirect to" toggle to 301-redirect it to `albiandus.com`.
4. SSL provisions automatically once DNS resolves.

## Project structure

```
src/
  app/
    layout.tsx            root layout, metadata, fonts
    page.tsx              landing page composition
    globals.css           Tailwind v4 theme tokens
    icon.tsx              dynamic favicon
    opengraph-image.tsx   OG image (1200×630)
    privacy/page.tsx      privacy policy
    terms/page.tsx        terms of service
  components/             one file per section
```

## Editing copy

Each section is a self-contained component. To change wording, edit the relevant file in `src/components/` — there's no CMS to log into.

Legal pages are in `src/app/privacy/page.tsx` and `src/app/terms/page.tsx`. Update the "Last updated" date at the top of each when you change them.
