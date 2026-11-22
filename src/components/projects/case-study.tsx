import Image from "next/image";
import { getTranslations } from "next-intl/server";

import type { ProjectConfig } from "@/content/projects";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";

function getStringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
}

export async function CaseStudy({
  locale,
  project,
}: {
  locale: Locale;
  project: ProjectConfig;
}) {
  const t = await getTranslations({ locale, namespace: "caseStudies" });
  const projectKey = `projects.${project.key}`;
  const roleItems = getStringArray(t.raw(`${projectKey}.roleItems`));
  const featureItems = getStringArray(t.raw(`${projectKey}.featureItems`));

  return (
    <article className="case-study">
      <header className="case-hero">
        <Link className="case-back" href="/#work">
          <span aria-hidden="true">←</span> {t("back")}
        </Link>
        <p className="case-number">{project.number} / {t("label")}</p>
        <h1>{t(`${projectKey}.name`)}</h1>
        <p className="case-status">{t(`${projectKey}.status`)}</p>
      </header>

      <section className="case-overview" aria-labelledby="case-overview-title">
        <h2 id="case-overview-title">{t("overview")}</h2>
        <p>{t(`${projectKey}.overview`)}</p>
      </section>

      <section className="case-role" aria-labelledby="case-role-title">
        <h2 id="case-role-title">{t("role")}</h2>
        <ul>
          {roleItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {featureItems.length > 0 ? (
        <section className="case-features" aria-labelledby="case-features-title">
          <h2 id="case-features-title">{t("features")}</h2>
          <ul>
            {featureItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="case-gallery" aria-labelledby="case-gallery-title">
        <h2 id="case-gallery-title">{t("gallery")}</h2>
        <div className="case-gallery-grid">
          {project.gallery.map((image) => (
            <figure key={image.src}>
              <div className="case-gallery-image">
                <Image
                  src={image.src}
                  alt={t(`${projectKey}.${image.altKey}`)}
                  fill
                  sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1024px) calc(100vw - 64px), 50vw"
                />
              </div>
              <figcaption>{t(`${projectKey}.${image.altKey}`)}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="case-stack" aria-labelledby="case-stack-title">
        <h2 id="case-stack-title">{t("stack")}</h2>
        <ul>
          {project.stack.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </section>

      {project.url ? (
        <section className="case-link" aria-labelledby="case-link-title">
          <h2 id="case-link-title">{t("visit")}</h2>
          <a href={project.url} target="_blank" rel="noreferrer">
            {project.url} <span aria-hidden="true">↗</span>
          </a>
        </section>
      ) : null}
    </article>
  );
}
