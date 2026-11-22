# THETAIX Portfolio --- Project brief

Личный сайт-портфолио Ильи Кузина (`THETAIX`).

## Документы

-   [`SPEC.md`](./SPEC.md) --- полное техническое задание и требования к
    сайту.
-   [`AGENTS.md`](./AGENTS.md) --- правила работы AI-агентов и
    разработчиков в репозитории.

## Первый шаг

Перед реализацией запустить только **Phase 0 --- Repository Inspection
and Planning** из `SPEC.md`.

На этом этапе агент должен изучить репозиторий и выдать план. Не
устанавливать зависимости, не менять файлы и не создавать интерфейс до
согласования.

## Основные принципы

-   Minimal Editorial Interactive.
-   Русский и английский.
-   Next.js App Router, TypeScript, Tailwind CSS.
-   Реальные проекты и честное описание личного вклада.
-   Никаких выдуманных метрик, работодателей, ссылок или контактных
    данных.
-   Доступность, адаптивность и производительность --- часть требований,
    а не финальная косметика.

## Текущий статус

Phase 0, Phase 1, Phase 2, Phase 3 и Phase 4 завершены.

### Реализовано в Phase 1

-   Next.js App Router и TypeScript в strict mode.
-   Tailwind CSS 4 и базовые CSS design tokens.
-   `next-intl` с локалями `ru` и `en`.
-   Перенаправление `/` на `/ru`.
-   Рабочие маршруты `/ru` и `/en`.
-   Базовые локализованные metadata и `lang` документа.
-   Подготовка `hreflang` через metadata alternates.
-   Загрузка Space Grotesk, Inter и IBM Plex Mono через `next/font`.
-   Светлая и тёмная тема на CSS variables.
-   Типизированные конфигурации сайта и контактов.
-   Базовые focus styles и `prefers-reduced-motion`.

### Структура foundation

-   `src/app/` — App Router, root layout и locale layout.
-   `src/i18n/` — routing, request config и navigation helpers.
-   `src/config/` — typed site и contacts configuration.
-   `messages/` — локализационные словари `ru.json` и `en.json`.
-   `src/proxy.ts` — locale middleware для `next-intl`.

### Установленные версии

-   Next.js `16.4.6`
-   React `19.3.1`
-   `next-intl` `4.15.1`
-   Tailwind CSS `4.3.5`
-   TypeScript `6.0.3`

Package manager: `npm`; lock-файл — `package-lock.json`.

### Проверки Phase 1

Успешно выполнены:

-   `npm run lint`
-   `npm run typecheck`
-   `npm run build`
-   runtime-проверка `/`, `/ru` и `/en` на production-сервере

Проверено поведение:

-   `/` возвращает redirect на `/ru`;
-   `/ru` отвечает с `lang="ru"`;
-   `/en` отвечает с `lang="en"`.

## Контекст для следующего агента

Phase 4 завершена: реализованы локализованные кейс-страницы пяти
подтверждённых проектов Momenta, TrueStars, LymeDiary, Besta и HelloDear.

Следующая возможная задача — **Phase 5: Playground**. Начинать её только
после отдельного явного согласования владельца.

Инструкции для агента находятся в:

-   `docs/PHASE5_HANDOFF.md`
-   `docs/PHASE5_PROMPT.md`

Пока не реализованы:

-   Playground;
-   About-страница вне главной страницы;
-   production-домен и canonical URL;
-   LinkedIn.

## Важные ограничения

-   Не выдумывать проектные детали, технологии, метрики, URL или
    контактные данные.
-   Number4me описывать только как работу над лендингом.
-   `hellodear` не включать без подтверждённых данных.
-   Не показывать технические TODO и нерабочие кнопки в публичном UI.
-   Не добавлять backend, CMS, базу данных или авторизацию без изменения
    требований.
-   Перед следующей фазой прочитать [AGENTS.md](./AGENTS.md) и
    [SPEC.md](./SPEC.md).
