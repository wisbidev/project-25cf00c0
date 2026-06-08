# aiteam — Architecture

## Overview

Static SaaS landing page for **aiteam**, an AI platform that auto-builds software via Telegram. Single-page, fully static (Next.js export), deployable to Vercel or any static host. No backend, no database.

## Tech Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Next.js 15 App Router | SSR/SSG hybrid; static export possible |
| Language | TypeScript | Type safety throughout |
| Styling | Tailwind CSS v3 | Utility-first; matches design spec |
| Animations | Framer Motion | Scroll-triggered fade-in + slide-up per spec |
| Deployment | Vercel (static export) | Zero-config, CDN-backed |
| Lint | ESLint + `next lint` | CI gate on every PR |

## Folder Structure

```
aiteam/
├── docs/
│   ├── SRS.md            ← product spec (source of truth)
│   └── architecture.md   ← this file
├── frontend/             ← Next.js application
│   ├── app/              ← App Router pages
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/       ← section components
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.ts
│   ├── postcss.config.js
│   ├── tsconfig.json
│   ├── .eslintrc.json
│   ├── .env.example
│   ├── .gitignore
│   └── Dockerfile
├── .env.example          ← shared / compose-level vars
├── .gitignore
├── docker-compose.yml     ← local dev stack (Next.js only; db not needed for static)
└── .github/
    └── workflows/
        └── ci.yml
```

## Design Tokens (from design.spec)

| Token | Value | Usage |
|---|---|---|
| `--color-accent` | `#3B82F6` | Primary CTA, hover glows, links |
| `--color-bg` | `#0B1120` | Page background |
| `--color-surface` | `#1E293B` | Card backgrounds |
| `--color-muted` | `#94A3B8` | Secondary text |
| `--color-text` | `#F8FAFC` | Primary text |
| `--color-border` | `#334155` | Card borders |

## Key Decisions

1. **Static export (`output: 'export'`)** — landing page requires no server-side data; enables Vercel static hosting or plain CDN.
2. **No backend** — the product (aiteam) is described on this page; Telegram interaction happens outside the page.
3. **Framer Motion for animations** — scroll-triggered fade-in/slide-up per F7.
4. **`next lint` as CI lint gate** — single command, no custom ESLint config beyond Next.js defaults.
5. **Docker Compose for local dev only** — boots the Next.js dev server; production uses Vercel.

## Environment Variables

### Root `.env.example`
```env
# Next.js public vars exposed to the browser
NEXT_PUBLIC_API_URL=http://localhost:8080   # backend API (future; not used in v1)
NEXT_PUBLIC_TELEGRAM_BOT_URL=https://t.me/your_bot   # Telegram bot link
```

### Frontend `.env.example`
```env
# Public — exposed to browser
NEXT_PUBLIC_TELEGRAM_BOT_URL=https://t.me/your_bot   # Telegram bot link
# Note: no secrets here; this is a static site
```

## Running Locally

### Docker Compose (full stack)
```bash
cp .env.example .env
docker compose up --build
# Frontend available at http://localhost:3000
```

### Without Docker (frontend only)
```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

## CI Gate

Every PR runs `.github/workflows/ci.yml`:
- `frontend` job: `npm ci && npm run lint && npm run build && npm test --if-present`
- `compose` job: `docker compose config -q` (validates docker-compose syntax)

Passing CI is a prerequisite for TL review.

## Section Map (F1–F8)

| ID | Section | File(s) |
|---|---|---|
| F1 | Hero | `frontend/components/Hero.tsx` |
| F2 | Pipeline / How It Works | `frontend/components/Pipeline.tsx` |
| F3 | AI Agents | `frontend/components/Agents.tsx` |
| F4 | Features | `frontend/components/Features.tsx` |
| F5 | Tech Stack | `frontend/components/TechStack.tsx` |
| F6 | Final CTA + Footer | `frontend/components/Footer.tsx` |
| F7 | Animations & Polish | Framer Motion in each component |
| F8 | SEO & Meta Tags | `frontend/app/layout.tsx` |
