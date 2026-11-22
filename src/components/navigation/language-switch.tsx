"use client";

import type { Locale } from "@/i18n/routing";

type LanguageSwitchProps = {
  activeLocale: Locale;
  labels: {
    label: string;
    ru: string;
    en: string;
  };
};

function routeForLocale(locale: Locale) {
  const currentUrl = new URL(window.location.href);
  const pathSegments = currentUrl.pathname.split("/").filter(Boolean);

  if (pathSegments[0] === "ru" || pathSegments[0] === "en") {
    pathSegments.shift();
  }

  const relativePath = `/${pathSegments.join("/")}`;
  const knownRoutes = [
    /^\/$/,
    /^\/about\/?$/,
    /^\/playground\/?$/,
    /^\/playground\/(gradient-studio|cursor-lab|shape-motion|ui-playground)\/?$/,
  ];
  const normalizedPath = relativePath === "/" ? "/" : relativePath.replace(/\/$/, "");
  const translatedRouteExists = knownRoutes.some((pattern) => pattern.test(normalizedPath));
  const targetPath = translatedRouteExists ? normalizedPath : "/";

  return `/${locale}${targetPath === "/" ? "" : targetPath}${currentUrl.search}${currentUrl.hash}`;
}

export function LanguageSwitch({ activeLocale, labels }: LanguageSwitchProps) {
  function switchLocale(locale: Locale) {
    if (locale === activeLocale) return;
    window.location.assign(routeForLocale(locale));
  }

  return (
    <div className="language-switch" role="group" aria-label={labels.label}>
      {(["ru", "en"] as const).map((locale) => (
        <button
          className="language-button"
          type="button"
          key={locale}
          aria-label={locale === "ru" ? labels.ru : labels.en}
          aria-pressed={locale === activeLocale}
          onClick={() => switchLocale(locale)}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
