"use client";

import { useEffect, useRef, useState } from "react";

import { navigationItems } from "@/config/navigation";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";

import { LanguageSwitch } from "./language-switch";
import { ThemeSwitch } from "./theme-switch";

type MobileMenuProps = {
  locale: Locale;
  labels: {
    open: string;
    close: string;
    mobileNavigation: string;
    work: string;
    playground: string;
    about: string;
    contact: string;
    language: string;
    switchToRu: string;
    switchToEn: string;
    theme: string;
    light: string;
    dark: string;
  };
};

export function MobileMenu({ locale, labels }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const navLabels = {
    work: labels.work,
    playground: labels.playground,
    about: labels.about,
    contact: labels.contact,
  };

  return (
    <div className="mobile-menu">
      <button
        ref={buttonRef}
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? labels.close : labels.open}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="menu-icon" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>

      <div
        id="mobile-navigation"
        className="mobile-navigation"
        hidden={!open}
      >
        <nav aria-label={labels.mobileNavigation}>
          {navigationItems.map((item) => (
            <Link
              className="mobile-nav-link"
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {navLabels[item.key]}
            </Link>
          ))}
        </nav>
        <div className="mobile-controls">
          <LanguageSwitch
            activeLocale={locale}
            labels={{
              label: labels.language,
              ru: labels.switchToRu,
              en: labels.switchToEn,
            }}
          />
          <ThemeSwitch
            labels={{
              label: labels.theme,
              light: labels.light,
              dark: labels.dark,
            }}
          />
        </div>
      </div>
    </div>
  );
}
