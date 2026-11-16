# David Alejandro O. — Portfolio

Next.js 15 (App Router) + React 19 + TypeScript. Fully static, deploys to Vercel with zero config.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also type-checks)
```

## Deploy to Vercel
1. Push this folder to a GitHub repo (e.g. `NextGen-CoreDev/portfolio`).
2. On vercel.com → **Add New → Project** → import the repo. Framework is detected as **Next.js**; keep the defaults.
   (If the repo root is the parent `CV` folder, set **Root Directory** to `portfolio`.)
3. Deploy. The site URL for SEO/social previews is picked up automatically from Vercel.
   With a custom domain, add the env var `NEXT_PUBLIC_SITE_URL=https://your-domain.com` and redeploy.

Or from a terminal: `npx vercel` (preview) / `npx vercel --prod`.

## Edit content
| What | Where |
|---|---|
| Name, links (GitHub, email, Upwork, LinkedIn), rate, avatar | `src/data/site.ts` — empty values hide their buttons |
| Projects (hero stack, Work slider, case-study modal) | `src/data/projects.ts` + images in `public/projects/<slug>/` |
| "I need to…" services | `src/data/services.ts` |
| Experience, skills, tools marquee | `src/data/experience.ts` |
| Page sections & copy | `src/app/page.tsx` |
| Colors, fonts, layout | `src/app/globals.css` (tokens at the top) |

Profile photo: save it as `public/avatar.jpg` and set `avatar: "/avatar.jpg"` in `site.ts`.

## Work section behaviour
- Desktop (≥768px): the section pins and vertical scroll slides the project track horizontally, with a lime progress bar (like parish.cv).
- Phones, or when the OS asks for reduced motion: a native swipe carousel with snap points.
