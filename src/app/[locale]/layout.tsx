import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing, type Locale } from "@/i18n/routing";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: requestedLocale } = await params;

  if (!hasLocale(routing.locales, requestedLocale)) {
    return {};
  }

  const locale = requestedLocale as Locale;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((language) => [language, `/${language}`]),
      ),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: requestedLocale } = await params;

  if (!hasLocale(routing.locales, requestedLocale)) {
    notFound();
  }

  setRequestLocale(requestedLocale as Locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="site-shell" data-locale={requestedLocale}>
        <Header locale={requestedLocale as Locale} />
        <main id="main-content" className="site-main">
          {children}
        </main>
        <Footer locale={requestedLocale as Locale} />
      </div>
    </NextIntlClientProvider>
  );
}
