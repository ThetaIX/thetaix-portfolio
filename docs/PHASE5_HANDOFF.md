# Phase 5 Handoff: Playground

## Goal

Implement only **Phase 5: Playground** for THETAIX Portfolio.

Do not implement Phase 6 or later phases without a separate explicit approval.

## Mandatory Reading

1. `docs/AGENTS.md`
2. `docs/SPEC.md`
3. `docs/README.md`
4. `docs/PHASE4_HANDOFF.md`
5. `docs/PHASE5_HANDOFF.md`
6. `docs/PHASE5_PROMPT.md`

## State After Phase 4

- Phase 0 through Phase 4 are complete.
- The repository is on branch `dev`.
- The home page is localized and all five project cards link to localized case pages.
- Existing project routes:
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
- The current project set is exactly Momenta, TrueStars, LymeDiary, Besta, and HelloDear.
- Number4me must not be created or mentioned.
- Existing Header, Footer, theme switch, language switch, metadata, design tokens, and responsive layout must be preserved.

## Required Phase 5 Scope

Implement:

1. Localized Playground index.
2. Gradient Studio.
3. Cursor Lab.
4. Shape Motion.
5. UI Playground.

Required routes:

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

Do not add project routes, project data, or unrelated pages.

## Playground Requirements

### Gradient Studio

- Choose at least two colors.
- Change the gradient angle.
- Switch between linear and radial modes.
- Show a live preview.
- Display generated CSS.
- Provide Copy CSS and Reset controls.
- Copy feedback must be visible and accessible.

### Cursor Lab

- Offer multiple cursor variants.
- Provide interactive hover zones.
- Allow the effect to be enabled and disabled.
- Provide Reset.
- Do not replace the global cursor automatically.
- On touch devices, provide a clear alternative state.

### Shape Motion

- Choose a shape.
- Configure speed and direction.
- Configure intensity.
- Provide Pause/Play and Reset.
- Respect `prefers-reduced-motion`.
- Motion must not interfere with reading or navigation.

### UI Playground

- Provide real demonstrations for buttons, toggles, tabs, tooltips, dropdowns, cards, and loading states.
- Every control must work.
- Do not ship decorative dead controls or placeholder handlers.

### Shared Requirements

- Visible text belongs in `messages/ru.json` and `messages/en.json`.
- Use `next-intl` and preserve locale switching.
- Use client components only for necessary interactivity.
- Keep state local to each experiment.
- Use strict TypeScript and no `any`.
- Do not add dependencies or libraries unless explicitly approved.
- Use semantic controls and accessible labels.
- Preserve keyboard navigation and focus visibility.
- Respect reduced motion.
- Prevent horizontal overflow on mobile.
- Handle hydration safely.
- Unknown slugs use the existing not-found behavior.

## Repository Context

- App Router: `src/app/[locale]/**`
- Shared layout: `src/app/[locale]/layout.tsx`
- Existing navigation: `src/config/navigation.ts`
- Existing mobile and language controls: `src/components/navigation/**`
- Locale dictionaries: `messages/ru.json`, `messages/en.json`
- Design tokens and responsive styles: `src/app/globals.css`

## Validation

Before finishing:

1. Run `npm run lint`.
2. Run `npm run typecheck`.
3. Run `npm run build`.
4. Smoke-test `/`, `/ru`, `/en`, the Playground index, and all eight localized experiment routes.
5. Verify language switching, theme switching, mobile navigation, keyboard navigation, focus states, hydration warnings, copy feedback, reset behavior, reduced motion, and horizontal overflow.
6. Report exactly what changed, commands and real results, remaining TODOs, and owner decisions required.

Do not commit unless the owner explicitly asks.
Do not git push.
