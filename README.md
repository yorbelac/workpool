# workpool.app

Company and portfolio site for Workpool LLC. Built with Next.js 16, Tailwind v4, Neon and Resend. Hosted on Vercel.

- **Style system:** [docs/STYLE.md](docs/STYLE.md). Read it before changing UI.
- **Products listed:** [lib/products.ts](lib/products.ts)
- **Contact form:** [app/actions/contact.ts](app/actions/contact.ts) saves each inquiry to Neon (`inquiries`), then emails it through Resend.

## Develop

```bash
cp .env.example .env.local   # fill in DATABASE_URL and RESEND_API_KEY
npm install
npm run dev
```

## Database

Migrations are plain SQL in `db/`, applied in order. Neon project: `workpool` (`dry-surf-87105000`).
