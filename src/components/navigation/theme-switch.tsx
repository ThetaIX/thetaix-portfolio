"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

type ThemeSwitchProps = {
  labels: {
    label: string;
    light: string;
    dark: string;
  };
};

function subscribeToTheme(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  window.addEventListener("storage", onStoreChange);

  return () => {
    observer.disconnect();
    window.removeEventListener("storage", onStoreChange);
  };
}

function getThemeSnapshot(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

export function ThemeSwitch({ labels }: ThemeSwitchProps) {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  function toggleTheme() {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("thetaix-theme", nextTheme);
  }

  return (
    <button
      className="theme-button"
      type="button"
      aria-label={labels.label}
      aria-pressed={theme === "dark"}
      title={theme === "dark" ? labels.light : labels.dark}
      onClick={toggleTheme}
    >
      <span className="theme-icon theme-icon-light" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
        </svg>
      </span>
      <span className="theme-icon theme-icon-dark" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M20 15.1A8 8 0 1 1 8.9 4a6.5 6.5 0 0 0 11.1 11.1Z" />
        </svg>
      </span>
    </button>
  );
}
