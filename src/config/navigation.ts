export type NavigationItemKey = "work" | "playground" | "about" | "contact";

export const navigationItems = [
  { key: "work", href: "/#work" },
  { key: "playground", href: "/playground" },
  { key: "about", href: "/#about" },
  { key: "contact", href: "/#contact" },
] as const satisfies readonly {
  key: NavigationItemKey;
  href: `/${string}` | "/#work" | "/#contact";
}[];
