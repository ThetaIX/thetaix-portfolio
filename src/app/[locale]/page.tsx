import type { Locale } from "@/i18n/routing";
import { HomePageSections } from "@/components/sections/home-page";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <HomePageSections locale={locale as Locale} />;
}
