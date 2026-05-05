export const locales = ["en", "zh"];
export const defaultLocale = "en";

/**
 * Returns the other supported locale for AtlasClaw's two-locale website.
 *
 * @param {string} locale Current locale.
 * @returns {string} Alternate locale code.
 */
export function getAlternateLocale(locale) {
  return locale === "zh" ? "en" : "zh";
}

/**
 * Swaps the locale prefix in a route while preserving the rest of the localized path.
 *
 * @param {string} pathname Current localized route pathname.
 * @param {string} locale Locale prefix currently present in the route.
 * @returns {string} Route pathname with the alternate locale prefix.
 */
export function swapLocaleInPath(pathname, locale) {
  const alternate = getAlternateLocale(locale);
  const prefix = `/${locale}/`;
  if (!pathname.startsWith(prefix)) {
    return `/${alternate}/`;
  }
  return pathname.replace(prefix, `/${alternate}/`);
}
