import { defaultLocale, locales } from "./i18n.js";

export const siteUrl = "https://atlasclaw.ai";

const defaultSocialImagePath = "/og/atlasclaw-social.svg";
const brandLogoPath = "/images/brand/atlasclaw-icon.png";

const localeMetadata = {
  en: {
    ogLocale: "en_US",
    languageName: "English",
    keywords: [
      "AtlasClaw",
      "open source AI agent framework",
      "enterprise AI agent framework",
      "multi-user AI agent",
      "governed AI agent execution",
      "provider-based integrations",
      "embedded AI agent",
      "floating AI assistant",
      "dynamic context matching",
      "webhook AI integration",
      "SSO",
      "RBAC",
      "enterprise-approved LLM",
      "AtlasClaw releases",
      "SmartCMP provider",
      "Jira provider"
    ]
  },
  zh: {
    ogLocale: "zh_CN",
    languageName: "Chinese",
    keywords: [
      "AtlasClaw",
      "开源 AI Agent 框架",
      "企业级 AI Agent",
      "多用户 AI Agent",
      "受控执行",
      "权限治理",
      "Provider 集成",
      "嵌入式 AI Agent",
      "悬浮 AI 助手",
      "动态 Context 匹配",
      "Skill 执行",
      "Webhook AI 集成",
      "企业受控大模型",
      "AtlasClaw 发布记录",
      "SmartCMP",
      "Jira"
    ]
  }
};

/**
 * Returns an absolute site URL while preserving AtlasClaw's trailing-slash route contract.
 *
 * @param {string} pathname Route pathname beginning with a slash.
 * @returns {string} Fully qualified atlasclaw.ai URL.
 */
export function absoluteUrl(pathname) {
  return new URL(pathname, siteUrl).href;
}

/**
 * Builds the language-specific path for the current page.
 *
 * @param {string} pathname Current route pathname.
 * @param {string} currentLocale Locale currently rendering the page.
 * @param {string} targetLocale Locale that should replace the current prefix.
 * @returns {string} Route pathname for the target locale.
 */
export function localizePath(pathname, currentLocale, targetLocale) {
  const prefix = `/${currentLocale}/`;
  if (!pathname.startsWith(prefix)) {
    return `/${targetLocale}/`;
  }
  return pathname.replace(prefix, `/${targetLocale}/`);
}

/**
 * Creates canonical and alternate URLs for a localized AtlasClaw route.
 *
 * @param {string} pathname Current localized route pathname.
 * @param {string} currentLocale Locale currently rendering the page.
 * @returns {{canonicalUrl: string, alternates: Array<{locale: string, href: string}>, xDefaultUrl: string}}
 * SEO URLs for canonical, hreflang alternates, and the page-specific x-default.
 */
export function buildLocalizedSeoUrls(pathname, currentLocale) {
  const alternates = locales.map((locale) => ({
    locale,
    href: absoluteUrl(locale === currentLocale ? pathname : localizePath(pathname, currentLocale, locale))
  }));

  return {
    canonicalUrl: absoluteUrl(pathname),
    alternates,
    xDefaultUrl: absoluteUrl(localizePath(pathname, currentLocale, defaultLocale))
  };
}

/**
 * Returns Open Graph language metadata for a page locale.
 *
 * @param {string} locale Page locale.
 * @returns {{ogLocale: string, languageName: string, keywords: string[]}} Locale SEO metadata.
 */
export function getLocaleSeoMetadata(locale) {
  return localeMetadata[locale] ?? localeMetadata[defaultLocale];
}

/**
 * Converts a localized route into schema.org breadcrumb items.
 *
 * @param {object} params Breadcrumb parameters.
 * @param {string} params.lang Page locale.
 * @param {string} params.pathname Current route pathname.
 * @param {object} params.content Locale content bundle from siteContent.
 * @returns {Array<{name: string, item: string}>} Ordered breadcrumb entries.
 */
export function buildBreadcrumbItems({ lang, pathname, content }) {
  const routePath = pathname.replace(new RegExp(`^/${lang}/?`), "").replace(/\/$/, "");
  const segments = routePath ? routePath.split("/") : [];
  const labels = buildRouteLabels(content);
  const items = [{ name: content.nav.home, item: absoluteUrl(`/${lang}/`) }];

  let currentPath = `/${lang}/`;
  for (const segment of segments) {
    currentPath += `${segment}/`;
    items.push({
      name: labels[segment] ?? titleCase(segment),
      item: absoluteUrl(currentPath)
    });
  }

  return items;
}

/**
 * Builds JSON-LD graph data for Google-visible page, site, organization, and breadcrumb signals.
 *
 * @param {object} params Structured data parameters.
 * @param {string} params.lang Page locale.
 * @param {string} params.pathname Current route pathname.
 * @param {string} params.title Rendered page title.
 * @param {string} params.description Rendered page description.
 * @param {object} params.content Locale content bundle from siteContent.
 * @param {string[]} [params.keywords] Page-specific search keywords.
 * @param {string} [params.socialImagePath] Page-specific social preview image path.
 * @param {Array<{
 *   headline: string,
 *   description: string,
 *   datePublished: string,
 *   url: string,
 *   keywords?: string[]
 * }>} [params.articles] Article-like entries represented as TechArticle nodes.
 * @returns {string} JSON-LD graph serialized for an application/ld+json script tag.
 */
export function buildStructuredData({
  lang,
  pathname,
  title,
  description,
  content,
  keywords,
  socialImagePath,
  articles = []
}) {
  const canonicalUrl = absoluteUrl(pathname);
  const localeSeo = getLocaleSeoMetadata(lang);
  const pageKeywords = keywords ?? localeSeo.keywords;
  const breadcrumbItems = buildBreadcrumbItems({ lang, pathname, content });
  const pageId = `${canonicalUrl}#webpage`;
  const articleNodes = articles.map((article) => ({
    "@type": "TechArticle",
    "@id": `${article.url}#techarticle`,
    headline: article.headline,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    url: article.url,
    inLanguage: localeSeo.languageName,
    keywords: (article.keywords ?? pageKeywords).join(", "),
    isPartOf: { "@id": pageId },
    publisher: { "@id": `${siteUrl}/#organization` }
  }));
  const graph = [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: content.meta.siteName,
      description: content.meta.defaultDescription,
      inLanguage: localeSeo.languageName,
      publisher: { "@id": `${siteUrl}/#organization` }
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: content.meta.siteName,
      url: siteUrl,
      logo: absoluteUrl(brandLogoPath),
      sameAs: [
        "https://github.com/CloudChef/atlasclaw",
        "https://github.com/CloudChef/atlasclaw-providers",
        "https://github.com/CloudChef/atlasclaw-web"
      ]
    },
    {
      "@type": articleNodes.length > 0 ? "CollectionPage" : "WebPage",
      "@id": pageId,
      url: canonicalUrl,
      name: title,
      description,
      keywords: pageKeywords.join(", "),
      isPartOf: { "@id": `${siteUrl}/#website` },
      inLanguage: localeSeo.languageName,
      primaryImageOfPage: absoluteUrl(socialImagePath ?? defaultSocialImagePath),
      breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
      ...(articleNodes.length > 0
        ? { mainEntity: articleNodes.map((article) => ({ "@id": article["@id"] })) }
        : {})
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.item
      }))
    },
    ...articleNodes
  ];

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}

/**
 * Returns the absolute Open Graph and Twitter card image URL.
 *
 * @param {string} [pathname] Page-specific social image path.
 * @returns {string} Fully qualified social preview image URL.
 */
export function socialImageUrl(pathname = defaultSocialImagePath) {
  return absoluteUrl(pathname);
}

function buildRouteLabels(content) {
  return {
    architecture: content.nav.architecture,
    integrations: content.nav.integrations,
    "embedded-agent": content.nav.embedded,
    releases: content.nav.releases,
    docs: content.nav.docs,
    "getting-started": content.docs.items[0].title,
    providers: content.docs.items[1].title,
    deployment: content.docs.items[2].title
  };
}

function titleCase(value) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
