# Mahadi Hasan — Portfolio

A responsive portfolio built with Next.js App Router, TypeScript, Tailwind CSS 4, Redux Toolkit, and Motion. The site exports to static HTML for straightforward hosting.

## Run locally

```sh
npm install
npm run dev
```

Visit http://127.0.0.1:3000. For production, run `npm run build`; deploy the generated `out/` directory to static hosting, or import this project into Vercel.

## Structure

```text
app/                 App Router entry points, metadata, global design system
components/sections/ Hero, work, about, experience, and contact sections
components/projects/ Reusable project preview rendering
components/shared/   Navigation, links, headings, and motion wrapper
lib/profile.ts       Contact links, navigation, and skills
lib/projects.ts      Typed project catalog and external project links
lib/store.tsx        Redux filter/expansion state and per-instance provider
public/assets/       Portrait and project images from the original portfolio
```

Update profile and project data in `lib/` without changing the layout. Project images are optional; projects without source screenshots use explicitly labeled interface concepts. Company apps are credited as team contributions. The résumé button uses the original Google Drive link; update it when your résumé changes.

Contact uses mail and telephone links with clipboard support; no server-side contact service or credentials are required. No fabricated delivery metrics, employment dates, or client endorsements are included.

## Verification

`npm run typecheck` checks TypeScript. `npm run build` validates the production static export. Check desktop/mobile navigation, category filters, project expansion, email copying, and external links in a browser.

The development and build scripts use Webpack because Turbopack's CSS subprocess failed on the Windows build host. `npm run format` applies Prettier. Production build and TypeScript checks passed; browser visual and interaction checks could not be completed because preview access was declined. Update `metadataBase` in `app/layout.tsx` when deploying under a different domain.

Content sources: the supplied portfolio repository, user-provided current role and project links. Original source is retained separately in `../reference-portfolio` and is not part of deployment.
