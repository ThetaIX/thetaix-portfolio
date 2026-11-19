import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("foundation");

  return (
    <main>
      <h1 className="sr-only">{t("title")}</h1>
      <p className="sr-only">{t("description")}</p>
    </main>
  );
}
