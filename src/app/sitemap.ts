import type { MetadataRoute } from "next";

const baseUrl = "https://thetaix-portfolio.vercel.app";
const locales = ["ru", "en"] as const;
const projects = ["momenta", "truestars", "lymediary", "besta", "hellodear"] as const;
const experiments = [
  "gradient-studio",
  "cursor-lab",
  "shape-motion",
  "ui-playground",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = locales.flatMap((locale) => [
    { url: `${baseUrl}/${locale}`, alternates: { languages: { ru: `${baseUrl}/ru`, en: `${baseUrl}/en` } } },
    ...projects.map((project) => ({
      url: `${baseUrl}/${locale}/work/${project}`,
      alternates: {
        languages: {
          ru: `${baseUrl}/ru/work/${project}`,
          en: `${baseUrl}/en/work/${project}`,
        },
      },
    })),
    { url: `${baseUrl}/${locale}/playground`, alternates: { languages: { ru: `${baseUrl}/ru/playground`, en: `${baseUrl}/en/playground` } } },
    ...experiments.map((experiment) => ({
      url: `${baseUrl}/${locale}/playground/${experiment}`,
      alternates: {
        languages: {
          ru: `${baseUrl}/ru/playground/${experiment}`,
          en: `${baseUrl}/en/playground/${experiment}`,
        },
      },
    })),
  ]);

  return routes.map((route) => ({
    url: route.url,
    changeFrequency: "monthly",
    priority: route.url.endsWith("/ru") || route.url.endsWith("/en") ? 1 : 0.7,
    alternates: route.alternates,
  }));
}
