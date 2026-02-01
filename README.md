# NewEra Inc. Landing Page

Next.js 16 + React 19 + Tailwind CSS 4 + Framer Motion

## Features

- 🌙 **Dark/Light mode** — toggle button, defaults to system preference
- 🌐 **Multi-language (VI/EN)** — switch via `?lang=en` or `?lang=vi`, flag icon toggle in nav, defaults to browser language
- 📱 **Responsive** — mobile-first design
- ⚡ **Optimized** — WebP images, standalone Docker build

## Getting Started

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open http://localhost:3000

## Environment Variables

| Variable | Default | Description |
|---|---|---|
| `NEXT_PUBLIC_ENABLE_LOADING` | `false` | Enable loading animation on page load |

## Multi-language

- Default: auto-detect from browser
- Override via URL: `?lang=en` or `?lang=vi`
- Toggle via flag icon (🇻🇳/🇬🇧) in navigation

## Build & Deploy

```bash
npm run build     # Production build
npm run start     # Start production server
```

### Docker

```bash
docker build -t landing-page-fe .
docker run -p 3000:3000 landing-page-fe
```

### CI/CD

GitLab CI auto-builds on push to `main`. Config: `.gitlab-ci.yml`

## Branch Strategy

- `main` — production, CI auto-deploy
- `develop` — staging/development
