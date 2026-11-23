export type NavigationItemKey = "work" | "playground" | "about" | "contact";

export const navigationItems = [
  { key: "work", href: "/#work" },
  { key: "about", href: "/#about" },
  { key: "contact", href: "/#contact" },
  { key: "playground", href: "/playground" },
] as const satisfies readonly {
  key: NavigationItemKey;
  href: `/${string}` | "/#work" | "/#contact";
}[];
