# De'Andre Perry Portfolio

A data-driven UX design portfolio built with Vinext/Next.js, TypeScript, React, and custom CSS.

## Customize the content

- Replace case study copy, research counts, and sample metrics in `data/projects.ts`.
- Replace the career timeline, email, social links, and résumé path in `data/site.ts`.
- Replace `public/deandre-perry-resume-placeholder.txt` with `public/deandre-perry-resume.pdf`, then update `siteConfig.resume`.
- Replace or extend the CSS/React product mockups in `components/project-visual.tsx`. If you add exported project images, keep them in `public/projects/<project-slug>/`.
- Brand color and layout tokens live at the top of `app/globals.css`.
- The optimized logo and favicon are in `public/brandmark.png` and `public/favicon.png`.

All six included projects are fictional portfolio samples. Do not present the participant counts or outcome metrics as verified client results without replacing them.

## Run locally

```bash
npm run dev
```

## Validate

```bash
npm run lint
npm run build
```
