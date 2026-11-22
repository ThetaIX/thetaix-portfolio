import { getTranslations } from "next-intl/server";

import { navigationItems } from "@/config/navigation";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";

import { LanguageSwitch } from "@/components/navigation/language-switch";
import { ThemeSwitch } from "@/components/navigation/theme-switch";
import { MobileMenu } from "@/components/navigation/mobile-menu";

export async function Header({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "navigation" });
  const controls = await getTranslations({ locale, namespace: "controls" });

  return (
    <>
      <a className="skip-link" href="#main-content">
        {t("skipToContent")}
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="ILYA / THETAIX">
            <span>ILYA</span>
            <span aria-hidden="true"> / </span>
            <span>THETAIX</span>
          </Link>

          <nav className="desktop-nav" aria-label={t("mainNavigation")}>
            {navigationItems.map((item) => (
              <Link
                className="nav-link"
                key={item.key}
                href={item.href}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="header-controls">
            <LanguageSwitch
              activeLocale={locale}
              labels={{
                label: controls("language"),
                ru: controls("switchToRu"),
                en: controls("switchToEn"),
              }}
            />
            <ThemeSwitch
              labels={{
                label: controls("theme"),
                light: controls("lightTheme"),
                dark: controls("darkTheme"),
              }}
            />
            <MobileMenu
              locale={locale}
              labels={{
                open: t("openMenu"),
                close: t("closeMenu"),
                mobileNavigation: t("mobileNavigation"),
                work: t("work"),
                playground: t("playground"),
                about: t("about"),
                contact: t("contact"),
                language: controls("language"),
                switchToRu: controls("switchToRu"),
                switchToEn: controls("switchToEn"),
                theme: controls("theme"),
                light: controls("lightTheme"),
                dark: controls("darkTheme"),
              }}
            />
          </div>
        </div>
      </header>
    </>
  );
}
