# De’Andre Perry — UX Designer

An editorial UX portfolio built with Vinext, React, and TypeScript. Plus Jakarta Sans is self-hosted. The primary brand color is #146ff8.

## Selected work

1. UXD Systems — visual design and design systems; flagship
2. UXR Forge — research reasoning and research operations
3. 508 Dev — accessibility and inclusive interaction
4. Palette Snap — visual design and color interaction

Case studies use actual product captures, implementation analysis, annotated screens, diagrams, and explicitly proposed validation. Product-scope numbers are not participant results or impact metrics. No primary research is fabricated.

## Development

```sh
npm ci
npm run dev
npm run lint
npx tsc --noEmit --incremental false
npm run build
```

The production static export is generated in `dist/client`. Prerendering requires permission to bind a local port. Generated output, dependencies, local environment files, and caches are excluded from Git.

## Structure

- `app/`: routes, metadata, shared layout, and styles
- `components/`: reusable navigation, case-study, visual, toolkit, and interaction components
- `data/projects.ts`: project narratives and review context
- `data/scope-numbers.ts`: implementation-backed product counts
- `data/profile.ts`: certificates and credential links
- `data/toolkit.ts`: overall toolkit and verified project-specific tools
- `data/site.ts`: identity and contact configuration
- `public/projects/`: authentic product screenshots and supporting assets
- `docs/`: evidence audits, capture briefs, and verification reports

Routes include Home, Work, four `/work/<slug>` case studies, About, Contact, and Resume. The legacy Experience route remains available.

## Before publication

Confirm the production origin and sitemap, supply the résumé and edX credential URL, and review project authorship, dates, and historical evidence. Search indexing remains disabled until publication readiness is confirmed. The accessibility widget has a singleton asynchronous loader; live vendor loading still needs verification on the intended production origin. Native accessibility does not depend on the widget.

The `.openai/hosting.json` file retains the existing Sites project association. Pushing this repository does not itself deploy the site unless a deployment workflow is configured separately.

## GitHub Pages deployment

`main` is the production source branch. `.github/workflows/deploy.yml` installs locked dependencies, runs lint and TypeScript checks, builds the static application, and publishes only `dist/client` to GitHub Pages. The existing custom domain is `deandreperry.com`; `public/CNAME` preserves it in build output. GitHub Pages must use GitHub Actions as its build source, not the raw repository root.
