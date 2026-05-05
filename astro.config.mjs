import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://atlasclaw.ai",
  output: "static",
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) => page !== "https://atlasclaw.ai/",
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          zh: "zh"
        }
      },
      serialize(item) {
        const isHome = item.url.endsWith("/en/") || item.url.endsWith("/zh/");
        const isDocs = item.url.includes("/docs/");

        return {
          ...item,
          changefreq: isHome ? "weekly" : "monthly",
          priority: isHome ? 1 : isDocs ? 0.7 : 0.8
        };
      }
    })
  ]
});
