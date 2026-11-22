# Prompt for a New Phase 6 Agent

You are working on THETAIX Portfolio in `D:\Work2\vizitka`.

Read and follow:

- `docs/AGENTS.md`
- `docs/SPEC.md`
- `docs/README.md`
- `docs/PHASE4_HANDOFF.md`
- `docs/PHASE5_HANDOFF.md`
- `docs/PHASE5_PROMPT.md`

Execute only **Phase 6: Polish**.

Do not implement Phase 7 or deployment.
Do not implement any later page or phase.
Do not create or mention Number4me.
Do not change the approved project set or add project routes.

## Current state

- Phase 0 through Phase 5 are complete.
- Playground is implemented and committed at commit `2f822e6`.
- Existing project routes and all localized Playground routes must be preserved.
- The repository currently has no production domain. Do not invent one, add canonical metadata with a fake domain, or configure production deployment.
- LinkedIn remains unavailable and must not be added.
- No new dependencies are approved.

## Phase 6 scope

Implement polish only across existing routes:

1. Accessibility
   - Audit semantic headings and landmarks.
   - Verify keyboard navigation and visible focus states.
   - Verify control labels, live regions, menu/dropdown states, touch targets, and screen-reader behavior.
   - Improve contrast and missing accessible names where evidence shows an issue.
   - Do not remove or degrade existing theme, locale, or motion behavior.

2. Motion
   - Respect `prefers-reduced-motion` consistently.
   - Preserve short, purposeful transitions and remove motion that interferes with navigation or reading.
   - Avoid layout shifts and unnecessary animation.

3. SEO and metadata
   - Verify and improve localized titles and descriptions for existing pages and Playground routes.
   - Add or correct `hreflang` alternatives where appropriate.
   - Add Open Graph metadata using repository-confirmed values only.
   - Do not configure an incorrect production canonical domain.
   - Do not invent clients, metrics, testimonials, awards, external URLs, or Schema.org facts.
   - Add a `robots.txt` or sitemap only if it can use correct locale routes and no unknown production domain.

4. Responsive refinements
   - Correct confirmed mobile, tablet, and desktop layout issues.
   - Prevent horizontal overflow.
   - Preserve Header/Footer, mobile navigation, theme switch, and locale switch.

5. Performance
   - Preserve `next/image` usage.
   - Reduce client component scope where possible without changing behavior.
   - Avoid layout shifts and unnecessary libraries.
   - Validate font, image, and bundle behavior as far as the local environment allows.

6. Error and not-found states
   - Add or refine localized 404 behavior for unknown locale routes and unknown work/Playground slugs.
   - Preserve the existing layout and navigation where practical.
   - Keep the 404 route linked and understandable.

## Required constraints

- Preserve Next.js App Router and strict TypeScript.
- Preserve Tailwind CSS 4 and `next-intl`.
- Put every visible UI string in `messages/ru.json` and `messages/en.json`.
- Reuse existing design tokens and component patterns.
- Use Server Components unless client-side interactivity is necessary.
- Do not add dependencies.
- Do not add backend, CMS, database, authentication, or new project routes.
- Do not modify the approved project set or project case content unless a Phase 6 issue requires a factual correction supported by existing evidence.
- Do not create, mention, or link Number4me.
- Do not commit unless the owner explicitly asks.
- Do not push or configure a git remote.

## Validation

Before finishing:

1. Run `npm run lint`.
2. Run `npm run typecheck`.
3. Run `npm run build`.
4. Smoke-test `/`, `/ru`, `/en`, all Phase 4 work routes, Playground index routes, all eight Playground experiment routes, and representative unknown slugs.
5. Verify language switching, theme switching, mobile navigation, keyboard navigation, focus states, copy feedback, reset behavior, dropdown/tab/toggle behavior, hydration warnings, reduced motion, and horizontal overflow at mobile and desktop widths.
6. Run browser console review and report any hydration, runtime, or accessibility issue observed.
7. Report exactly what changed, files created or modified, commands run and real results, known issues, remaining TODOs, and owner decisions required.
