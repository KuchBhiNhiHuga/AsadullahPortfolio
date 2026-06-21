# Asadullah I. — Portfolio

Next.js 15 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Run locally
npm install
npm run dev

## Notes / TODO before going live
- `lib/data.ts` testimonials use placeholder client names — swap in real quotes/names once you have approval to publish them.
- Project `url` fields for a few sites (Waisee Design, DeMastery, pingSlash, NewsWava) use the names you gave me — replace with the live domain once available.
- Contact form in `components/Contact.tsx` simulates submission — wire `handleSubmit` to your real endpoint (Formspree, Resend, or an n8n webhook, fitting your stack).
- `app/globals.css` loads Cabinet Grotesk from Fontshare's CDN — if you have a licensed local copy, swap in `next/font/local` instead.
- Tailwind tokens in `tailwind.config.ts` are taken directly from your design.md (colors, spacing, radius, shadows, motion durations).
