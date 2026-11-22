import { hasLocale } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export default async function LocaleNotFound() {
  const requestedLocale = await getLocale();
  const locale: Locale = hasLocale(routing.locales, requestedLocale)
    ? requestedLocale
    : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: "notFound" });

  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <p className="case-number">404</p>
      <h1 id="not-found-title">{t("title")}</h1>
      <p>{t("description")}</p>
      <div className="not-found-actions">
        <Link className="primary-action" href="/">
          {t("backHome")}
        </Link>
      </div>
    </section>
  );
}
