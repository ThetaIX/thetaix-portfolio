import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations({ locale: "ru", namespace: "notFound" });

  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <p className="case-number">404</p>
      <h1 id="not-found-title">{t("title")}</h1>
      <p>{t("description")}</p>
      <div className="not-found-actions">
        <a className="primary-action" href="/ru">
          {t("backHome")}
        </a>
      </div>
    </section>
  );
}
