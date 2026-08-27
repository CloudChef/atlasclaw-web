# atlasclaw-web

Static Astro website for `atlasclaw.ai`.

## Product Content

The site includes localized English and Chinese pages for:

- Embedded Mode, including independent menu access, the floating assistant,
  Enterprise System Cookie identity, dynamic Context matching, and governed
  object actions;
- release notes through `v1.0.0`, including reliable Agent workflows, native
  cancellation, Embedded Context improvements, minimal HA, and versioned
  Provider packages;
- architecture, integrations, documentation entry points, and repository links.

Shared localized content is maintained in `src/content/site.js`. The Embedded
Mode page is implemented in `src/pages/[lang]/embedded-agent.astro`, with
localized architecture assets under `public/images/embedded/`.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

GitHub Actions builds the site and deploys `dist/` to GitHub Pages on pushes to `main`.
