# THETAIX Portfolio

A multilingual personal portfolio for Ilya Kuzin, Frontend Developer.
The site presents selected projects, a downloadable CV, contact links,
and a set of interactive UI experiments.

Built with Next.js App Router and a strong focus on typography,
accessibility, responsive design, localization, and performance.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- next-intl
- Vercel Analytics
- ESLint

## Features

- Russian and English versions with locale-based routing
- Localized project case-study pages
- Dark and light themes
- Responsive desktop and mobile navigation
- Accessible interactive components
- Localized metadata, canonical URLs, and `hreflang`
- Playground with UI and motion experiments
- Downloadable CV

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open `http://localhost:3000`.

The default locale routes are:

- `/ru`
- `/en`

## Scripts

```bash
npm run dev        # Start the development server
npm run lint       # Run ESLint
npm run typecheck  # Run the TypeScript checker
npm run build      # Create a production build
npm run start      # Start the production server
```

## Project Structure

```text
src/
  app/             # App Router pages and layouts
  components/      # UI, navigation, sections, and playground components
  config/          # Site and contact configuration
  content/         # Project configuration
  i18n/            # Locales, routing, and navigation helpers
messages/          # English and Russian translations
public/            # Images, project assets, and CV
```

## Localization

Translations are stored in:

- `messages/en.json`
- `messages/ru.json`

Locale routing is implemented with `next-intl`.

## Deployment

The project can be deployed on Vercel or any platform that supports
Next.js applications.

```bash
npm run build
npm run start
```

## Author

**Ilya Kuzin**

- GitHub: [@ThetaIX](https://github.com/ThetaIX)
- Telegram: [@mmmm_monkey](https://t.me/mmmm_monkey)
- Email: [kuzin.ilya0208@gmail.com](mailto:kuzin.ilya0208@gmail.com)
