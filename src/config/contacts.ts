export const contactsConfig = {
  email: "kuzin.ilya0208@gmail.com",
  telegram: "https://t.me/mmmm_monkey",
  github: "https://github.com/ThetaIX",
  linkedin: undefined as string | undefined,
  cv: undefined as string | undefined,
} as const;

export type ContactsConfig = typeof contactsConfig;
