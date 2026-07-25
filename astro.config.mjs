import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const lastModifiedByPath = new Map([
  ["/en/embedded-agent/", new Date("2026-07-25T00:00:00Z")],
  ["/zh/embedded-agent/", new Date("2026-07-25T00:00:00Z")],
  ["/en/releases/", new Date("2026-07-25T00:00:00Z")],
  ["/zh/releases/", new Date("2026-07-25T00:00:00Z")]
]);

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
        const lastmod = lastModifiedByPath.get(new URL(item.url).pathname);

        return {
          ...item,
          ...(lastmod ? { lastmod } : {})
        };
      }
    })
  ]
});
