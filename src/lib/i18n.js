export const locales = ["en", "zh"];
export const defaultLocale = "en";

export function getAlternateLocale(locale) {
  return locale === "zh" ? "en" : "zh";
}

export function swapLocaleInPath(pathname, locale) {
  const alternate = getAlternateLocale(locale);
  const prefix = `/${locale}/`;
  if (!pathname.startsWith(prefix)) {
    return `/${alternate}/`;
  }
  return pathname.replace(prefix, `/${alternate}/`);
}
