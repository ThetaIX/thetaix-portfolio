import type { Locale } from "@/i18n/routing";

export const siteConfig = {
  name: "Ilya Kuzin",
  brand: "THETAIX",
  role: "Frontend Developer",
  domain: undefined as string | undefined,
  availableForOpportunities: true,
  locales: ["ru", "en"] as const satisfies readonly Locale[],
} as const;

export type SiteConfig = typeof siteConfig;
