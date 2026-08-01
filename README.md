# BBFF Website

Website for **Bash Bright Future Foundation (BBFF)**, a registered foundation
in Uganda. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and
Supabase, deployed on Vercel.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in your Supabase project URL + anon key
npm run dev
```

## Design system

- **Colors**: forest green (trust/growth), teal (sustainability), gold
  (accent — used sparingly), sand (background), charcoal (text). See
  `tailwind.config.ts` for the full token scale.
- **Type**: Fraunces (display/headings), Public Sans (body), IBM Plex Mono
  (stats & data, e.g. Reports & Transparency).
- **Signature motif**: `components/ui/GrowthRings.tsx` — concentric rings
  representing compounding, year-over-year impact. Used for stat displays
  on Home and Impact pages.

## Structure

- `app/` — routes (App Router)
- `components/layout/` — Header, Footer (site chrome)
- `components/ui/` — reusable primitives (Button, Card, Section, Container,
  GrowthRings)
- `lib/constants.ts` — nav links, site config, footer links, socials
- `lib/supabase/` — client + server Supabase instances
- `types/` — shared content types (Programme, Project, NewsPost, ImpactStat)

## Roadmap

Pages are being built incrementally: Home → About → Programmes → Projects →
Impact → Donate → Contact → Admin Dashboard → Supabase schema →
Authentication → Deployment.
