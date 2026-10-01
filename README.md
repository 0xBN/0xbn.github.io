# Personal portfolio

Live site: [https://0xbn.github.io](https://0xbn.github.io)

Single-page React portfolio. Almost all copy and links are plain JavaScript objects in the repo—no CMS.

## How this repo works

| Branch / path | Role |
| ------------- | ---- |
| **`main`** | Source code you edit (React, styles, data files). |
| **`gh-pages`** | Built static site only. **Do not edit by hand**—it is overwritten on deploy. |
| **`dist/`** | Local build output (gitignored). Same files that get pushed to `gh-pages`. |

**Flow:** change content or UI on `main` → push → GitHub Actions runs `npm run build` → publishes `dist` to `gh-pages` → GitHub Pages serves the site.

GitHub Pages for this repo should be configured to deploy from the **`gh-pages`** branch (root). That matches the existing project setup.

## Edit content (one place)

Most site content lives in **`src/data/site.js`**. It is a JS module, not JSON—you edit object literals and save. The app imports `site` via `src/data/index.js`.

| Export in `site.js` | What it drives |
| ------------------- | -------------- |
| `user` | Name, title, email, GitHub, LinkedIn, resume URL, light/dark profile images |
| `hero` | Greeting, headline, subheadline |
| `about.summary` | About section paragraphs (array of strings) |
| `skills` | Stack icons in the **Tools** section (labeled in data; shown icon-only on the page) |
| `tools` | Cursor / Claude / VS Code (listed **first** in the Tools row) |

**Projects** are in **`src/data/projects.js`** (carousel cards: name, description, images, `technologies`, `link`, `code`). `site.js` re-exports `projects` for the rest of the app.

**Profile photos:** replace files under `src/shared/img/` and keep the imports at the top of `site.js` if you rename them.

### Tools row icons

- Stack keys (`typescript`, `react`, etc.) map to SVGs in `src/data/skillIcons.js` / `src/svgs/`.
- App tools (`cursor`, `claude`, `vscode`) use [Simple Icons](https://simpleicons.org/) via `src/data/brandIcons.js`.

Each skill/tool entry shape:

```js
{ name: 'React', link: 'https://react.dev/', icon: 'react' }
```

`name` is used for accessibility (`aria-label` / hover title) even when the UI is icon-only.

## Local development

```bash
npm install
npm start
```

Opens [http://localhost:5173](http://localhost:5173). Same as `npm run dev`.

**Production build (optional check):**

```bash
npm run build
npm run preview
```

## Deploy

### Automatic (default)

Push to **`main`**. The workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) installs deps, builds, and pushes `dist` to **`gh-pages`**.

Check **Actions → Deploy to GitHub Pages** on GitHub. After it succeeds, allow a minute for Pages to update; hard-refresh if needed.

Pushing to `main` alone does **not** update the live site until that workflow (or a manual deploy below) runs.

### Manual

From your machine:

```bash
npm run deploy
```

Runs `predeploy` (clean `dist` + `npm run build`) then `gh-pages -d dist`. Use this if you need to publish without pushing to `main`.

## Tech stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Keen Slider](https://keen-slider.io/) (projects carousel)
- [GitHub Pages](https://pages.github.com/) (hosting from `gh-pages`)

## UI notes

- Glass-style sections, collapsing header on scroll, system/light/dark theme
- Hero social links use Simple Icons (`src/data/brandIcons.js`)
- Scroll-spy section labels in the header; `prefers-reduced-motion` respected for motion

## Forking

1. Fork the repo and set GitHub Pages to **`gh-pages`** / root (or enable the same Actions workflow).
2. Edit `src/data/site.js` and `src/data/projects.js`.
3. Push to `main` and confirm the deploy workflow passes.
