This is a [Next.js](https://nextjs.org) project for Matthew Cha Photography.

## Getting Started

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

- `NEXT_PUBLIC_SITE_URL` — your live domain (used for metadata, sitemap, robots, and JSON-LD). Set this to `https://matthewchaphotography.vercel.app` in Vercel. Defaults to `http://localhost:3000` locally.
- `NEXT_PUBLIC_FORMSPREE_POST` — Formspree endpoint for the contact form.
- `PACKAGES_PASSWORD` / `PACKAGES_AUTH_TOKEN` — password gate for `/packages`.

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Fonts are loaded with `next/font/local` from `src/fonts` (Gilda Display, Garamond Premier, Libre Franklin, and Cormorant Garamond).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Set the same environment variables in the Vercel project settings, using your real domain for `NEXT_PUBLIC_SITE_URL`.
