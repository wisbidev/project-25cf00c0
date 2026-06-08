# Software Requirements Specification — aiteam Landing Page

## 1. Overview

A dark-mode SaaS landing page built with Next.js + Tailwind CSS in Vietnamese. The page showcases **aiteam** — an AI platform that auto-builds software via Telegram. It communicates a single value proposition: "Describe your idea in Telegram, and an AI engineering team builds it — from planning to deploy."

## 2. Scope

Single-page landing site with 6 main sections on one scrollable page. No authentication, no backend, no database. Fully static, deployable via Vercel or any static host.

## 3. Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Deployment | Vercel / static export |

## 4. Functional Requirements

### F1 — Hero Section

- Headline: `AI Team. Không cần thuê dev.`
- Subheadline (2–3 lines describing the value prop in Vietnamese)
- Primary CTA: `Bắt đầu ngay` — links to Telegram
- Secondary CTA: `Xem cách hoạt động` — smooth-scrolls to Pipeline section
- Dark background (`#0B1120`) with a blue (`#3B82F6`) gradient accent element (e.g. glow/blur behind headline)
- Mobile-first responsive: stacks vertically, CTAs full-width on mobile

### F2 — Pipeline / How It Works

- Section title: `Từ ý tưởng đến deploy hoàn toàn tự động`
- 5 numbered step cards arranged horizontally (desktop) → vertically (mobile)
- Steps:
  1. User mô tả qua Telegram
  2. PM AI phân tích & estimate
  3. User duyệt
  4. AI team tự build
  5. Deploy hoàn tất
- Each card: step number, icon/emoji, title, short description
- Connecting line/arrow between steps (or timeline-style)

### F3 — AI Agents Section

- Section title: `4 AI Agents vận hành như engineering team thật`
- 4 agent cards: **PM**, **TL**, **Dev**, **TestLead**
- Each card: role title, avatar icon, 2–3 bullet responsibilities
- Card style: dark background (`#1E293B` card surface), light border (`#334155`), hover glow effect in blue (`#3B82F6`)
- 2×2 grid on desktop → single column on mobile

### F4 — Features Section

- Section title: `Tự động hóa toàn bộ quy trình phát triển phần mềm`
- 6 feature items in a grid (3×2 desktop → 2×3 tablet → 1 column mobile)
- Features:
  1. Telegram chat — discuss and command via Telegram
  2. No dev team needed — AI replaces the engineering team
  3. Auto GitHub PR workflow — every feature goes through PR → review → merge
  4. Cost/time estimate — get estimate before build
  5. Auto deploy — deploy to production automatically
  6. Realtime progress tracking — track progress via Telegram
- Each item: outline icon (SVG), title, 1-line description

### F5 — Tech Stack Section

- Section title: `Stack hiện đại, sẵn sàng production`
- Display items: Next.js, Go, PostgreSQL, Tailwind CSS, GitHub Actions, Docker
- Each item: logo/icon + name, styled as pill/badge cards
- Arranged in a centered flex-wrap row

### F6 — Final CTA + Footer Section

- Final CTA:
  - Headline: `Bắt đầu build sản phẩm với AI team`
  - Subheadline (1 line encouraging action)
  - CTA button: `Chat qua Telegram`
- Footer:
  - Logo / brand name
  - Social links: Telegram link, GitHub link
  - Copyright line: `© 2025 aiteam. All rights reserved.`

### F7 — Animations & Polish

- Framer Motion: fade-in + slide-up on scroll for each section
- Hover glow effects on cards and buttons (blue `#3B82F6`)
- Smooth transitions between sections
- Consistent spacing and typography across all breakpoints
- Fine-tune padding/margin for mobile, tablet, desktop

### F8 — SEO & Meta Tags

- Page title: `aiteam — AI Team tự động build phần mềm của bạn`
- Description: appropriate Vietnamese meta description (≤160 chars)
- Open Graph: `og:title`, `og:description`, `og:type=website`
- Favicon reference
- `<html lang="vi">`

## 5. Acceptance Criteria

- All 8 functions render correctly on Chrome, Firefox, Safari (latest 2 versions)
- Full responsiveness: 320px–1920px, no horizontal scroll
- All links open in same tab (CTAs) or new tab (social links)
- Framer Motion animations fire once on scroll entry
- Lighthouse score ≥ 90 for Performance, Accessibility, Best Practices
- SEO meta tags present and valid
- No console errors or warnings

## 6. Design

Design: see attached spec.

**Colors:** `#3B82F6` accent/primary, `#0B1120` background (dark), `#1E293B` card/surface, `#94A3B8` muted text, `#F8FAFC` white text

**Pages (sections):**
- Hero — headline + subheadline + 2 CTAs + blue gradient on dark bg
- Pipeline — 5-step timeline/step cards flow
- AI Agents — 4 cards (PM, TL, Dev, TestLead) with roles
- Features — 6-feature grid with outline icons
- Tech Stack — 6 tech logos/items display
- CTA+Footer — final CTA section + footer with links/copyright
