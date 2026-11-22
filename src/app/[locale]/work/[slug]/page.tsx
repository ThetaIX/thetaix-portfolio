import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { CaseStudy } from "@/components/projects/case-study";
import { getProjectByKey, homeProjects } from "@/content/projects";
import { routing, type Locale } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    homeProjects.map((project) => ({
      locale,
      slug: project.key,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: requestedLocale, slug } = await params;
  if (!hasLocale(routing.locales, requestedLocale)) return {};

  const locale = requestedLocale as Locale;
  const project = getProjectByKey(slug);
  if (!project) return {};

  const t = await getTranslations({ locale, namespace: "caseStudies" });
  const title = t(`projects.${project.key}.name`);
  const description = t(`projects.${project.key}.overview`);

  return {
    title,
    description,
    openGraph: {
      type: "website",
      title,
      description,
      locale: locale === "ru" ? "ru_RU" : "en_US",
      alternateLocale: locale === "ru" ? ["en_US"] : ["ru_RU"],
    },
    alternates: {
      canonical: `/${locale}/work/${project.key}`,
      languages: {
        ru: `/ru/work/${project.key}`,
        en: `/en/work/${project.key}`,
      },
    },
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: requestedLocale, slug } = await params;
  if (!hasLocale(routing.locales, requestedLocale)) notFound();

  const locale = requestedLocale as Locale;
  setRequestLocale(locale);
  const project = getProjectByKey(slug);
  if (!project) notFound();

  return <CaseStudy locale={locale} project={project} />;
}
