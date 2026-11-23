import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Onest } from "next/font/google";
import { getLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  weight: ["700", "800"],
  variable: "--font-onest",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thetaix-portfolio.vercel.app"),
  title: "Ilya Kuzin — Frontend Developer",
  description: "Portfolio of Ilya Kuzin, a frontend developer.",
  icons: {
    icon: [
      {
        url: "/thetaix-theta-logo.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  const themeScript = `(function(){try{var theme=localStorage.getItem("thetaix-theme");if(theme==="dark"||(theme!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark");}else{document.documentElement.classList.remove("dark");}}catch(e){}})();`;

  return (
    <html
      lang={locale}
      className={`${onest.variable} ${inter.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <head suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>
      <body>
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
      
    </html>
      
  );
}
