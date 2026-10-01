# Personal Portfolio Website

Personal portfolio at [https://0xbn.github.io](https://0xbn.github.io). Open source — fork it and edit your content in one place.

## Tech stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [GitHub Pages](https://pages.github.com/) for hosting

## Edit your content

All copy, projects, stack, and tools live in [`src/data/site.js`](src/data/site.js):

| Field | What to change |
| ----- | -------------- |
| `user` | Name, title, social links, resume URL, profile images |
| `hero` | Greeting and headline lines |
| `about.summary` | About paragraphs |
| `skills` | Stack grid (icon keys match `src/data/skillIcons.js`) |
| `tools` | Daily tools (defaults: Cursor, Claude, VS Code) |
| `projects` | Project cards for the Projects section |

Profile images: `src/shared/img/`.

## Local development

```bash
npm install
npm start
```

Open [http://localhost:5173](http://localhost:5173).

## Build and deploy

Pushes to `main` build and publish to the `gh-pages` branch via GitHub Actions (see `.github/workflows/deploy.yml`).

To deploy manually:

```bash
npm run deploy
```

`predeploy` clears `dist` and builds; `deploy` publishes `dist` to `gh-pages`.

## Notable features

- Responsive single-page layout with sticky section headers (desktop sidebar nav)
- Dark / light theme
- Scroll-triggered section reveals (respects `prefers-reduced-motion`)
- Custom project carousel

## Icons

Skill icons are inline SVGs under `src/svgs/` (patterns inspired by [devicon](https://devicon.dev/) and brand assets).
