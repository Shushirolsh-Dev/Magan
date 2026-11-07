# Magan

A quiet, editorial portfolio starter for independent designers, developers and creative people.

Magan is intentionally small. It gives you a considered visual foundation, a real responsive layout and a few useful interactions without locking you into a page builder, component library or design system you do not need.

The demo content uses a fictional designer, Alex Morgan. Replace it with your own name, work and writing before publishing.

## Preview

The page is built around a warm paper background, restrained typography, generous spacing and project artwork made with CSS. It includes:

- A typographic introduction and availability note.
- A selected-work grid with working category filters.
- Project details driven by a single typed data file.
- An about section and editable experience timeline.
- A contact area with a mail link and copy-email interaction.
- A compact mobile navigation menu.
- Reduced-motion support and semantic page landmarks.

## Built with

| Tool | Purpose |
| --- | --- |
| React | Interface and component state |
| TypeScript | Typed project content and application code |
| Vite | Local development and production builds |
| CSS | Layout, responsive behaviour and visual design |
| JavaScript (ES modules) | Small Node-based project checks |
| Go | Optional contact API starting point |

The Go service is deliberately separate from the frontend. You do not need Go installed to run the portfolio.

## Getting started

### Requirements

- Node.js 20 or newer
- npm 10 or newer

### Install

```bash
git clone https://github.com/Shushirolsh-Dev/Magan.git
cd Magan
npm install
npm run dev
```

Vite prints a local address in the terminal, usually `http://localhost:5173`.

### Production build

```bash
npm run check
npm run build
npm run preview
```

The production-ready site is written to `dist/`. Upload that directory to any static host that supports single-page application fallbacks.

## Make it yours

Most of the content lives in a small number of places.

### 1. Update the page title and metadata

Edit `index.html`. Change the title, description, theme colour and favicon to match your identity.

### 2. Change the portfolio content

Edit `src/data.ts`.

- `projects` controls the selected-work cards.
- `filters` controls the category buttons.
- `experience` controls the timeline.

Each project has a `tone` value. Choose one of `blue`, `clay`, `green` or `lilac` to change its artwork treatment. The artwork is CSS-based, so you can use it as-is or replace it with images of real work.

### 3. Replace the sample identity

Search the project for `Alex Morgan`, `Alex`, and `hello@example.com`. Replace the sample name, email address, social links, role, location and availability copy.

The email appears in both the visible contact link and the copy-email interaction in `src/App.tsx`.

### 4. Add your own project imagery

The current artwork is intentionally image-free. To use images, place optimized files in `public/images/` and replace the relevant `project-art` element in `src/App.tsx` with an image element. Give each image descriptive alternative text and specify its dimensions to avoid layout shifts.

### 5. Adjust the visual system

The main design tokens are at the top of `src/styles.css`:

- `--paper`: page background
- `--ink`: primary text
- `--muted`: secondary text
- `--line`: borders and dividers
- `--accent`: small highlight colour

Typography uses DM Sans, DM Mono and Instrument Serif from Google Fonts. If you prefer locally hosted fonts, download licensed font files and define them with `@font-face`.

## Optional Go contact API

The portfolio works without a backend. Its default contact action opens the visitor's email application.

For developers who want a backend starting point, `go-api/main.go` contains a small standard-library HTTP service with:

- `GET /health` for a health check.
- `POST /api/contact` for basic request validation.
- A 16 KB request-body limit.
- JSON responses and method checks.

Run it separately:

```bash
cd go-api
go run .
```

The service listens on port `8080` by default. Set `PORT` to change it.

Example request:

```bash
curl -X POST http://localhost:8080/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Sam","email":"sam@example.com","message":"I would like to discuss a project."}'
```

A successful request returns `202 Accepted`. This starter validates and acknowledges a message; it does **not** send email or store submissions. Before using it for real enquiries, connect a mail provider or durable storage, add rate limiting, configure allowed origins, and protect the endpoint against abuse. Do not collect sensitive information through this demo endpoint.

## Project structure

```text
magan/
├── go-api/
│   ├── go.mod
│   └── main.go
├── public/
│   └── favicon.svg
├── scripts/
│   └── check-links.mjs
├── src/
│   ├── App.tsx
│   ├── data.ts
│   ├── main.tsx
│   └── styles.css
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
└── vite.config.ts
```

## Accessibility and performance notes

- Semantic header, navigation, main, section and footer landmarks.
- Buttons expose their active state with `aria-pressed` and `aria-expanded`.
- Project artwork is decorative and does not contain essential information.
- The layout responds to narrow screens without horizontal scrolling.
- Reduced-motion preferences are respected.
- No runtime UI framework beyond React and no icon package are required.

Before launch, check colour contrast after changing the palette, use meaningful alt text for any project images, and test the navigation with a keyboard and screen reader.

## Deployment

Magan is a static Vite site. Build it with `npm run build` and deploy the contents of `dist/`.

Common options include GitHub Pages, Netlify, Cloudflare Pages and Vercel. For a root-domain deployment, the default Vite base path is ready to use. If deploying under a repository subpath, configure Vite's `base` option in `vite.config.ts`.

The optional Go API must be deployed as a separate service. Configure the frontend contact action to call your deployed API only after you have implemented actual message delivery and appropriate abuse protection.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local Vite server |
| `npm run check` | Run the TypeScript project check |
| `npm run build` | Type-check and create a production build |
| `npm run preview` | Preview the production build |

The small Node check can be run with:

```bash
node scripts/check-links.mjs
```

## License

Magan is released under the MIT License. See [LICENSE](LICENSE).

---

Made to be changed. Make it yours.