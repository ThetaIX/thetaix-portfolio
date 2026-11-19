# AGENTS.md --- THETAIX Portfolio

## Project context

This repository contains the personal portfolio website of Ilya Kuzin
(`THETAIX`), a frontend developer.

`SPEC.md` is the source of truth for product requirements, visual
direction, content constraints, architecture, accessibility, SEO, and
implementation phases. Read it before making project-level decisions.

## Mandatory workflow

1.  Inspect the repository before changing it.
2.  Read `SPEC.md` and this file.
3.  Follow the implementation phases in `SPEC.md`.
4.  Work only on the current agreed phase.
5.  Before making broad architectural changes, explain the reason and
    get approval.
6.  After each phase, report:
    -   what changed;
    -   files created/modified;
    -   commands/checks actually run;
    -   known issues;
    -   missing content;
    -   decisions requiring the owner's input.

## Phase 0 restriction

When asked to perform Phase 0: - inspect files, scripts, dependencies,
configuration, and existing assets; - identify missing content and
technical risks; - propose an implementation plan; - do not install
dependencies; - do not edit or create project files; - do not generate
components or UI; - do not make destructive changes.

Wait for approval before proceeding to implementation.

## Accuracy and honesty

Never invent: - employment or employer details; - project URLs, clients,
metrics, revenue, user counts, or business outcomes; - technologies used
on a project; - screenshots or product features; - personal contact
details; - testimonials, awards, or credentials.

Known project facts are documented in `SPEC.md`. If a detail is unknown,
leave a clearly marked TODO or ask the owner.

Important: - `Number4me`: Ilya worked on the landing page, not the
entire product. - `hellodear`: do not include until the owner provides
reliable details. - Work experience was remote project work; do not
imply formal employment unless explicitly confirmed.

## Design principles

-   Follow the Minimal Editorial Interactive direction in `SPEC.md`.
-   Prefer strong typography, whitespace, grid, clear hierarchy, and
    purposeful interaction.
-   Avoid generic AI portfolio patterns, excessive gradients,
    glassmorphism, random 3D decorations, unnecessary cards, and
    meaningless animation.
-   Keep the site concise and content-led.
-   Do not use fake skill percentages or fabricated statistics.
-   Use a real owner-provided portrait. Never generate or substitute an
    AI face.
-   If assets are missing, use a deliberate placeholder and record a
    TODO.

## Engineering principles

-   Use TypeScript strict mode.
-   Avoid `any`; if unavoidable, explain why and keep its scope small.
-   Prefer Server Components unless client-side interactivity is
    required.
-   Keep client components narrowly scoped.
-   Use semantic HTML and accessible controls.
-   Every visible button, link, toggle, and control must work.
-   Do not ship placeholder handlers or dead controls.
-   Respect `prefers-reduced-motion`.
-   Avoid unnecessary dependencies and abstractions.
-   Keep project content and site configuration centralized and typed.
-   Do not add a backend, database, CMS, or authentication to the MVP
    unless the owner approves a changed requirement.
-   Never commit secrets, tokens, or private credentials.

## Localization

-   Support Russian and English.
-   Keep translations complete and consistent.
-   Preserve the current page when switching language if the translated
    route exists.
-   Fall back to the corresponding locale homepage if it does not.
-   Do not leave accidental mixed-language UI.

## Quality checks

Before declaring a task complete, run the relevant checks available in
the repository, such as: - lint; - typecheck; - tests; - production
build.

Only report checks that were actually run and their real results. Do not
claim the site is tested or production-ready based only on code
inspection.

Check responsive behavior, keyboard navigation, focus visibility,
contrast, reduced motion, metadata, and browser console errors when
relevant.

## Communication

-   Keep updates concise and specific.
-   Explain trade-offs when a decision affects architecture, scope,
    performance, or maintainability.
-   Ask only for information that blocks accurate implementation.
-   Do not silently make product or content decisions that materially
    change the agreed specification.
