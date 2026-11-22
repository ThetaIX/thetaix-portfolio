import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { contactsConfig } from "@/config/contacts";
import { homeProjects } from "@/content/projects";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { CopyEmailButton } from "./copy-email-button";

export async function HomePageSections({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "home" });

  const toolkit = [
    {
      label: t("toolkit.groups.languages"),
      items: ["JavaScript", "TypeScript"],
    },
    {
      label: t("toolkit.groups.frontend"),
      items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      label: t("toolkit.groups.data"),
      items: ["Zustand", "Redux", "REST API", "Strapi"],
    },
    {
      label: t("toolkit.groups.tools"),
      items: ["Git", "Figma", "VS Code"],
    },
  ];

  return (
    <>
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              {t("hero.status")}
            </p>
            <h1 id="hero-title">{t("hero.title")}</h1>
            <p className="hero-subtitle">{t("hero.subtitle")}</p>
            <p className="hero-intro">{t("hero.intro")}</p>
            <div className="hero-actions">
              <Link className="primary-action" href="/#work">
                {t("hero.viewWork")}
                <span aria-hidden="true">↓</span>
              </Link>
              <Link className="text-action" href="/#contact">
                {t("hero.contact")}
              </Link>
            </div>
          </div>

          <div className="hero-portrait" aria-label={t("hero.portraitLabel")}>
            <Image
              className="hero-portrait-image"
              src="/profile/profile-photo.jpg"
              alt={t("hero.portraitAlt")}
              fill
              sizes="(max-width: 640px) 66vw, (max-width: 1024px) 25vw, 20vw"
              priority
            />
          </div>
        </div>
        <Link className="scroll-indicator" href="/#work" aria-label={t("hero.scrollLabel")}>
          <span aria-hidden="true">↓</span>
        </Link>
      </section>

      <section id="work" className="home-section work-section" aria-labelledby="work-title">
        <header className="section-heading">
          <p className="section-index">01 / {t("work.eyebrow")}</p>
          <h2 id="work-title">{t("work.title")}</h2>
        </header>

        <div className="project-grid">
          {homeProjects.map((project) => (
            <article className={`project-card project-card-${project.accent}`} key={project.key}>
              {project.image ? (
                <div className="project-card-image">
                  <Image
                    src={project.image}
                    alt={t(`projects.${project.key}.imageAlt`)}
                    fill
                    sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1024px) calc(50vw - 56px), calc(50vw - 88px)"
                  />
                </div>
              ) : null}
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
              </div>
              <div className="project-card-content">
                <h3>{t(`projects.${project.key}.name`)}</h3>
                <p>{t(`projects.${project.key}.description`)}</p>
                {project.technologies.length > 0 ? (
                  <ul className="project-technologies" aria-label={t("work.technologiesLabel")}>
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                ) : null}
                {project.url ? (
                  <a
                    className="project-external-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("work.visit")} <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="playground" className="home-section playground-section" aria-labelledby="playground-title">
        <header className="section-heading">
          <p className="section-index">02 / {t("playground.eyebrow")}</p>
          <h2 id="playground-title">{t("playground.title")}</h2>
        </header>
        <div className="playground-grid" aria-label={t("playground.previewLabel")}>
          <div className="playground-preview playground-preview-one" aria-hidden="true">
            <span className="preview-orbit preview-orbit-one" />
            <span className="preview-orbit preview-orbit-two" />
          </div>
          <div className="playground-preview playground-preview-two" aria-hidden="true">
            <span>Aa</span>
            <span>IX</span>
          </div>
          <div className="playground-preview playground-preview-three" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section id="about" className="home-section about-section" aria-labelledby="about-title">
        <header className="section-heading">
          <p className="section-index">03 / {t("about.eyebrow")}</p>
          <h2 id="about-title">{t("about.title")}</h2>
        </header>
        <div className="about-grid">
          <div className="about-photo">
            <Image
              src="/profile/profile-photo.jpg"
              alt={t("about.photoAlt")}
              fill
              sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <p className="about-lead">{t("about.lead")}</p>
          <div className="about-details">
            <p>{t("about.approach")}</p>
            <dl>
              <div>
                <dt>{t("about.educationLabel")}</dt>
                <dd>{t("about.education")}</dd>
              </div>
              <div>
                <dt>{t("about.experienceLabel")}</dt>
                <dd>{t("about.experience")}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="home-section toolkit-section" aria-labelledby="toolkit-title">
        <header className="section-heading">
          <p className="section-index">04 / {t("toolkit.eyebrow")}</p>
          <h2 id="toolkit-title">{t("toolkit.title")}</h2>
        </header>
        <div className="toolkit-grid">
          {toolkit.map((group) => (
            <article className="toolkit-group" key={group.label}>
              <h3>{group.label}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="home-section contact-section" aria-labelledby="contact-title">
        <header className="contact-heading">
          <p className="section-index">05 / {t("contact.eyebrow")}</p>
          <h2 id="contact-title">{t("contact.title")}</h2>
        </header>
        <div className="contact-links">
          <a className="contact-email" href={`mailto:${contactsConfig.email}`}>
            {contactsConfig.email}
          </a>
          <CopyEmailButton
            email={contactsConfig.email}
            label={t("contact.copy")}
            copiedLabel={t("contact.copied")}
            failedLabel={t("contact.copyFailed")}
          />
          <div className="contact-socials">
            <a href={contactsConfig.telegram} target="_blank" rel="noreferrer">
              Telegram <span aria-hidden="true">↗</span>
            </a>
            <a href={contactsConfig.github} target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            {contactsConfig.cv ? (
              <a href={contactsConfig.cv} target="_blank" rel="noreferrer">
                {t("contact.cv")} <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
