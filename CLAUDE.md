@AGENTS.md

# workpool.app

Promotional apex site for Workpool LLC, a product studio that also builds custom software. Subprojects live on their own hosts (carpool.workpool.app, chemix.app, Tabs, …). This repo is the brand hub and portfolio.

**Before touching any UI, read [docs/STYLE.md](docs/STYLE.md).** It covers Poppins everywhere, the three-color palette (`#4B69B1` / `#131213` / `#E9E6E5`), the two-dot motif, the contrast rules and the voice.

## Stack
- Next.js 16 (App Router, TypeScript), Tailwind v4 (tokens in `app/globals.css` `@theme`)
- Vercel hosting + Vercel Analytics; Cloudflare DNS
- Neon Postgres via `@neondatabase/serverless` (`lib/db.ts`); SQL migrations in `db/`, applied in order
- Resend for email (`app/actions/contact.ts`)
- zod v4 for validation (`z.email()`, `z.flattenError`)

## Conventions
- Product portfolio data lives in `lib/products.ts`. Add or edit products there, and only list products that are live.
- Websites we've built live in `lib/sites.ts`, with hero captures in `public/sites/` (1440×900 JPEG, header + hero). Same rule: live sites only, copy drawn from the site itself.
- Use `<Logo />` and `<Dots />`. Never hand-draw the wordmark or dots.
- Copy must be true: no invented clients, metrics or testimonials. Don't name Tabs' client venue.
- Env vars: see `.env.example`.
