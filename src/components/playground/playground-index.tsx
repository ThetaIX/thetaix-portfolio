import { getTranslations } from "next-intl/server";

import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";

export async function PlaygroundIndex({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "playground" });

  const experiments = [
    { key: "gradient-studio", number: "01", title: t("gradient.title"), description: t("gradient.description") },
    { key: "cursor-lab", number: "02", title: t("cursor.title"), description: t("cursor.description") },
    { key: "shape-motion", number: "03", title: t("shape.title"), description: t("shape.description") },
    { key: "ui-playground", number: "04", title: t("ui.title"), description: t("ui.description") },
  ] as const;

  return (
    <article className="playground-page">
      <header className="case-hero playground-hero">
        <p className="case-number">{t("label")}</p>
        <h1>{t("title")}</h1>
      </header>
      <div className="playground-index-grid">
        {experiments.map((experiment) => (
          <Link className="playground-index-card" href={`/playground/${experiment.key}`} key={experiment.key}>
            <span className="project-number">{experiment.number}</span>
            <h2>{experiment.title}</h2>
            <p>{experiment.description}</p>
            <span className="project-external-link">{t("open")} <span aria-hidden="true">→</span></span>
          </Link>
        ))}
      </div>
    </article>
  );
}
