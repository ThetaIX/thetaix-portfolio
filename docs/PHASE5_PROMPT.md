# Prompt for a New Phase 5 Agent

You are working on THETAIX Portfolio in `D:\Work2\vizitka`.

Read and follow:

- `docs/AGENTS.md`
- `docs/SPEC.md`
- `docs/README.md`
- `docs/PHASE4_HANDOFF.md`
- `docs/PHASE5_HANDOFF.md`
- `docs/PHASE5_PROMPT.md`

Execute only **Phase 5: Playground**.

Do not implement Phase 6 or later phases without a separate explicit approval.

Do not create or mention Number4me.

Do not change the approved project set or add any project routes.

Implement localized Playground routes:

- `/ru/playground`
- `/en/playground`
- `/ru/playground/gradient-studio`
- `/en/playground/gradient-studio`
- `/ru/playground/cursor-lab`
- `/en/playground/cursor-lab`
- `/ru/playground/shape-motion`
- `/en/playground/shape-motion`
- `/ru/playground/ui-playground`
- `/en/playground/ui-playground`

Preserve:

- Next.js App Router
- TypeScript strict mode
- Tailwind CSS 4
- `next-intl`
- existing Header/Footer
- existing theme and language controls
- existing design tokens and responsive layout
- Phase 4 project routes and content

Use Server Components unless client-side interactivity is necessary.

Implementation requirements:

- Create a localized Playground index.
- Implement Gradient Studio with live preview, linear/radial modes, angle control, Copy CSS, reset, and visible copy feedback.
- Implement Cursor Lab with explicit opt-in cursor variants, hover zones, enable/disable, reset, and an accessible touch state.
- Implement Shape Motion with shape, speed, direction, intensity, Pause/Play, reset, and reduced-motion support.
- Implement UI Playground demonstrations for buttons, toggles, tabs, tooltips, dropdowns, cards, and loading states.
- Put every visible UI string in `messages/ru.json` and `messages/en.json`.
- Reuse existing project and layout patterns.
- Add localized metadata and headings.
- Keep all controls keyboard accessible.
- Preserve focus states and reduced-motion behavior.
- Prevent horizontal overflow.
- Use no new dependencies.

Do not add:

- dependencies
- backend
- CMS
- database
- authentication
- production canonical domain
- project routes
- unrelated pages
- fake project content or screenshots

Unknown slugs must use the existing not-found behavior.

Before finishing:

1. Run `npm run lint`.
2. Run `npm run typecheck`.
3. Run `npm run build`.
4. Smoke-test `/`, `/ru`, `/en`, the Playground index, and all eight localized experiment routes.
5. Verify language switching, theme switching, mobile navigation, keyboard navigation, focus states, copy feedback, reset behavior, hydration warnings, reduced motion, and horizontal overflow.
6. Report exactly what changed, which commands ran, their real results, remaining TODOs, and questions requiring owner input.

Do not commit unless the owner explicitly asks.

Do not git push.
