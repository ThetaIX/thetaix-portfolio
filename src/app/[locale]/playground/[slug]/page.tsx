import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import {
  PlaygroundExperiment,
  type PlaygroundSlug,
} from "@/components/playground/playground-experiment";
import { routing, type Locale } from "@/i18n/routing";

const slugs: PlaygroundSlug[] = [
  "gradient-studio",
  "cursor-lab",
  "shape-motion",
  "ui-playground",
];

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: requestedLocale, slug } = await params;
  if (!hasLocale(routing.locales, requestedLocale) || !slugs.includes(slug as PlaygroundSlug)) return {};
  const locale = requestedLocale as Locale;
  const t = await getTranslations({ locale, namespace: "playground" });
  return {
    title: t(`${slug}.title`),
    description: t(`${slug}.description`),
    alternates: {
      languages: {
        ru: `/ru/playground/${slug}`,
        en: `/en/playground/${slug}`,
      },
    },
  };
}

export default async function PlaygroundExperimentPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: requestedLocale, slug } = await params;
  if (!hasLocale(routing.locales, requestedLocale)) notFound();
  if (!slugs.includes(slug as PlaygroundSlug)) notFound();

  const locale = requestedLocale as Locale;
  setRequestLocale(locale);
  return <PlaygroundExperiment locale={locale} slug={slug as PlaygroundSlug} />;
}
