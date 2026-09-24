# Nodalume Systems

Public site for **Nodalume Systems** — clarity at the critical points of a system.

Noda- (node) + -lume (light). A working name for practical work across personal IT, homelab, servers, 3D printing, software, research, and day-to-day coordination.

The site is a static [Astro](https://astro.build) one-pager. It is a public mark for the name, not a product catalog.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Production build

```bash
npm run build
npm run preview
```

`npm run build` writes the static site to `dist/`. `npm run preview` serves that folder locally.

## Deploy

The project is ready for Vercel or Netlify. Import the repository and use the defaults already in `vercel.json` and `netlify.toml`:

| | Build command | Output directory |
| --- | --- | --- |
| Vercel | `npm run build` | `dist` |
| Netlify | `npm run build` | `dist` |

Both hosts detect Astro. The config files make the build and publish directory explicit.

## Domain

The intended host is [hyprcore.com](https://hyprcore.com). DNS is not configured in this repo. `site` is left unset in `astro.config.mjs` until the domain actually serves this build. When it does, set `site: 'https://hyprcore.com'` there if you want canonical URLs.
