# Phase 4 Handoff: Project Case Studies

## Goal

Implement only **Phase 4: Project Case Studies** for THETAIX Portfolio.

Do not implement Phase 5 or later phases unless the owner explicitly approves an additional phase.

## Mandatory Reading

Read these files before making changes:

1. `docs/AGENTS.md`
2. `docs/SPEC.md`
3. `docs/README.md`
4. `docs/PHASE4_PROMPT.md`
5. `docs/PHASE4_HANDOFF.md`

## Current State

- Phase 0, Phase 1, Phase 2, and Phase 3 are complete.
- The home page is localized with `next-intl`.
- The repository is on branch `dev`.
- Remote is not configured.
- `Next.js 16.4.6`, `React 19.3.1`, TypeScript strict, Tailwind CSS 4.
- No project case page exists yet.
- The home page currently lists five projects:
  - Momenta
  - TrueStars
  - LymeDiary
  - Besta
  - HelloDear
- Number4me is not part of the current project set.
- hellodear is now a confirmed project and must be included.

## Project Set

This is the complete project set. Do not add any other project.

| Project | Status | External URL |
|---|---|---|
| Momenta | Host removed | None confirmed |
| TrueStars | Hosted | `https://truestars.ai/` |
| LymeDiary | In development | None confirmed |
| Besta | Not hosted | None confirmed |
| HelloDear | Hosted | `https://hellodear.ai/` |

## Confirmed Project Facts

### Momenta

- Description: AI photo-animation platform. A user uploads a photo, chooses a motion style, and receives a finished video.
- Stack: React 19, Vite, Redux Toolkit, React Router, Tailwind CSS, Styled Components, Axios, i18next, PostHog; Next.js 15 for the landing page.
- Owner contribution:
  - interface for upload and generation;
  - interface modals and error states;
  - responsive landing-page blocks;
  - localization;
  - subscription and analytics.
- Source: `sources/MomentaLive/text.txt`
- Screenshots:
  - `public/projects/momenta/landing.jpg`
  - `public/projects/momenta/login.png`
  - `public/projects/momenta/style_choise.jpg`

### TrueStars

- Description: SaaS reputation-management platform for businesses with reports, reviews, automated responses, local promotion, visibility analytics, and employee bonuses.
- Stack: React 19, Vite, Redux Toolkit, React Router, Tailwind CSS, Styled Components, Axios, Recharts, Stripe, i18next.
- Owner contribution:
  - interface refactoring and localization;
  - interface translation and adding languages;
  - Smart Tips filtering;
  - report and business settings styling.
- URL: `https://truestars.ai/`
- Source: `sources/TrueStars/text.txt`
- Screenshots:
  - `public/projects/truestars/dashboard.png`
  - `public/projects/truestars/profile_settings.png`

### LymeDiary

- Description: Platform for people with Lyme disease with symptom check-ins, diary, nutrition analysis, treatment protocols, AI insights, mental health, reports for clinicians, and a mobile application.
- Stack: Go, Gin, MongoDB, Redis, Stripe, OpenAI, React 19, Vite, Zustand, TanStack Query, Tailwind CSS, Next.js, Expo, React Native.
- Owner contribution:
  - mobile application;
  - Expo and React Native screens;
  - dashboard, check-in, profile, diary, scanner, and art-therapy screens;
  - navigation and localization;
  - Zustand/backend API integration;
  - camera, AI analysis, and mobile game/meditation screens.
- Status: in development.
- Source: `sources/LymeDiary/text.txt`
- Screenshots:
  - `public/projects/lymediary/landing.png`
  - `public/projects/lymediary/diary.png`
- Safety: keep medical information neutral and do not promise outcomes.

### Besta

- Description: AI assistant for real estate agents and agencies that answers professional questions, manages CRM leads, helps prepare documents, and automates communication.
- Stack: Next.js 15, React 18, TypeScript, Tailwind CSS, Radix UI, next-intl, Framer Motion, Zod.
- Owner contribution:
  - responsive animated Hero blocks;
  - mobile burger menu;
  - chat-bubble and typing-text animations;
  - localization;
  - metadata;
  - interface elements.
- Status: not hosted.
- Source: `sources/Besta/text.txt`
- Screenshot: `public/projects/besta/landing.png`

### HelloDear

- Description: AI service for friendly phone calls to older adults and concise care summaries for families and care teams. It works through an ordinary phone without an app.
- Stack: Next.js 15, React 18, TypeScript, Tailwind CSS, Radix UI, next-intl, Framer Motion, React Hook Form, Zod.
- Owner contribution:
  - Hero section;
  - responsive layout;
  - CTA blocks;
  - localization;
  - SEO schemas;
  - metadata;
  - sitemap.
- URL: `https://hellodear.ai/`
- Source: `sources/HelloDear/text.txt`
- Screenshot: `public/projects/hellodear/landing.png`

## Other Confirmed Resources

- Profile photo: `public/profile/profile-photo.jpg`
- CV PDF: `public/cv/ilya-kuzin-cv.pdf`
- Email: `kuzin.ilya0208@gmail.com`
- Telegram: `https://t.me/mmmm_monkey`
- GitHub: `https://github.com/ThetaIX`
- LinkedIn: not provided
- Production domain: not selected

Do not add LinkedIn.

Do not generate an incorrect canonical URL or production domain.

## Required Routes

Create localized routes for all five projects:

- `/ru/work/momenta`
- `/ru/work/truestars`
- `/ru/work/lymediary`
- `/ru/work/besta`
- `/ru/work/hellodear`
- `/en/work/momenta`
- `/en/work/truestars`
- `/en/work/lymediary`
- `/en/work/besta`
- `/en/work/hellodear`

Card links on the home page must lead to the matching localized case route.

Do not create routes for Number4me or any project not in the five-project set.

## Required Case Structure

Use the structure from `SPEC.md` where facts support it:

1. Project Hero
2. Overview
3. Project Context
4. My Role
5. Key Features
6. Technical Challenges
7. Solutions / Implementation
8. Gallery
9. Tech Stack
10. Links & Credits

Do not inflate cases with unknown facts. Omit unsupported sections rather than fabricating content.

## Technical Requirements

- Preserve TypeScript strict mode.
- Do not use `any`.
- Keep project content centralized and typed.
- All visible text must be in `messages/ru.json` and `messages/en.json`.
- Support RU/EN routes and language switching.
- Use the existing layout, navigation, fonts, tokens, and theme.
- Use `next/image` for project images.
- Use semantic headings and accessible image alternatives.
- Add keyboard-visible focus states.
- Support mobile layouts without horizontal overflow.
- Respect `prefers-reduced-motion`.
- Do not add backend, CMS, database, authentication, or dependencies.
- Do not configure a production canonical domain.
- Do not push or configure git remote.

## Repository Files to Inspect

- `src/app/[locale]/page.tsx`
- `src/app/[locale]/layout.tsx`
- `src/content/projects.ts`
- `src/components/sections/home-page.tsx`
- `src/components/navigation/language-switch.tsx`
- `src/config/navigation.ts`
- `src/config/contacts.ts`
- `src/i18n/*`
- `messages/ru.json`
- `messages/en.json`
- `src/app/globals.css`

## Implementation Sequence

1. Read all mandatory files.
2. Add a typed project detail data model.
3. Create localized dynamic work routes.
4. Add RU/EN content for all five projects.
5. Reuse confirmed screenshots in galleries.
6. Link home project cards to localized case routes.
7. Add correct external links only for TrueStars and HelloDear.
8. Run lint, typecheck, build.
9. Smoke-test both locales and all case routes.

## Validation

Run and report real results:

- `npm run lint`
- `npm run typecheck`
- `npm run build`

Also check:

- `/ru/work/momenta`
- `/ru/work/truestars`
- `/ru/work/lymediary`
- `/ru/work/besta`
- `/ru/work/hellodear`
- `/en/work/momenta`
- `/en/work/truestars`
- `/en/work/lymediary`
- `/en/work/besta`
- `/en/work/hellodear`
- language switching
- theme switching
- mobile navigation
- keyboard navigation
- focus states
- no hydration warnings
- no horizontal overflow

