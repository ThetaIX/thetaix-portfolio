import { getTranslations } from "next-intl/server";

import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";

export async function Footer({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "footer" });

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link className="footer-brand" href="/" aria-label="ILYA / THETAIX">
          ILYA / THETAIX
        </Link>
        <p className="footer-meta">
          <span>{t("role")}</span>
          <span>{t("copyright", { year: new Date().getFullYear() })}</span>
        </p>
      </div>
    </footer>
  );
}
