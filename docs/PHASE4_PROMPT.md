# Prompt for a New Phase 4 Agent

You are working on THETAIX Portfolio in `D:\Work2\vizitka`.

Read and follow:

- `docs/AGENTS.md`
- `docs/SPEC.md`
- `docs/README.md`
- `docs/PHASE4_HANDOFF.md`
- `docs/PHASE4_PROMPT.md`

Execute only **Phase 4: Project Case Studies**.

Do not implement Phase 5 or later phases without a separate explicit approval.

Do not create or mention Number4me.

The complete project set is exactly:

1. Momenta
2. TrueStars
3. LymeDiary
4. Besta
5. HelloDear

Do not add, infer, or create any other project.

Implement localized case pages for these routes:

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

Use only facts confirmed in `SPEC.md`, `sources/*/text.txt`, and the provided public assets.

Confirmed resources:

- Real profile photo: `public/profile/profile-photo.jpg`
- Real CV: `public/cv/ilya-kuzin-cv.pdf`
- Project screenshots under `public/projects/{momenta,truestars,lymediary,besta,hellodear}/`
- TrueStars URL: `https://truestars.ai/`
- HelloDear URL: `https://hellodear.ai/`
- Momenta and Besta are not hosted
- LymeDiary is in development
- LinkedIn is not confirmed
- Production domain is not selected

Do not display fake screenshots, fake project URLs, fake metrics, fake outcomes, or unsupported technologies.

Do not include confidential or medical information. LymeDiary copy must remain neutral and respectful.

Use centralized typed project data for the five projects. Keep all visible UI copy in `messages/ru.json` and `messages/en.json`.

Preserve:

- Next.js App Router
- TypeScript strict mode
- Tailwind CSS 4
- `next-intl`
- existing Header/Footer
- existing theme and language controls
- existing design tokens and responsive layout

Use Server Components unless client-side interactivity is necessary.

Do not add:

- dependencies
- backend
- CMS
- database
- authentication
- production canonical domain
- project routes outside the five approved projects
- unrelated pages

Unknown slugs must use the existing not-found behavior.

Implementation requirements:

- add or adapt centralized typed project content;
- create a shared typed case-study template;
- create dynamic localized work routes;
- add RU/EN metadata and headings;
- link each home-page project card to its localized case page;
- reuse confirmed screenshots as galleries;
- show project technologies only when confirmed;
- show external links only for TrueStars and HelloDear;
- keep the layout responsive and accessible;
- preserve focus states and keyboard navigation;
- respect reduced motion;
- prevent horizontal overflow.

Before finishing:

1. Run `npm run lint`.
2. Run `npm run typecheck`.
3. Run `npm run build`.
4. Smoke-test `/`, `/ru`, `/en`, and all ten localized project routes.
5. Verify language switching, theme switching, mobile navigation, keyboard navigation, focus states, hydration warnings, and horizontal overflow.
6. Report exactly what changed, which commands ran, their real results, remaining TODOs, and questions requiring owner input.

Do not commit unless the owner explicitly asks.

Do not git push.
