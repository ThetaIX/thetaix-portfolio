# Prompt for the Next Agent

You are continuing work on THETAIX Portfolio in `D:\Work2\vizitka`.

## Start by reading

1. `docs/AGENTS.md`
2. `docs/SPEC.md`
3. `docs/README.md`
4. `docs/PHASE4_HANDOFF.md`
5. `docs/PHASE5_HANDOFF.md`
6. `docs/PHASE5_PROMPT.md`

## Current state

- Phase 0 through Phase 5 are complete.
- Phase 5 added localized Playground routes and interactive experiments.
- The complete project set remains Momenta, TrueStars, LymeDiary, Besta, and HelloDear.
- Do not create or mention Number4me.
- Do not add or change project routes.
- Preserve the existing App Router, strict TypeScript, Tailwind CSS 4, `next-intl`, Header, Footer, locale switch, theme switch, design tokens, and Phase 4 content.
- Do not add dependencies or backend, CMS, database, authentication, or production-domain configuration.

## Scope rule

Do not implement Phase 6 or any later phase unless the owner explicitly approves that phase in the current task.

## Before changing files

1. Inspect the git status and diff; do not overwrite unrelated user changes.
2. Untracked `.vscode/` and `sources/` were not part of Phase 5 and must not be committed unless the owner separately asks.
3. Use the repository's existing patterns and all translations belong in `messages/ru.json` and `messages/en.json`.
4. Preserve unknown-slug 404 behavior.

## Phase 5 routes to preserve

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

## Handoff-known validation

- `npm run lint` passed.
- `npm run typecheck` passed.
- `npm run build` passed.
- All required routes passed production HTTP smoke tests.
- `/ru/playground/unknown-slug` returned 404.
- Browser smoke checks covered copy feedback, locale switching, mobile navigation, reduced motion, and horizontal overflow.

## Required reporting

At the end of your task, report exactly:

- what changed;
- files created or modified;
- commands run and their real results;
- known issues;
- remaining TODOs;
- owner decisions required.

Do not commit unless the owner explicitly asks.
Do not push or configure a remote.
