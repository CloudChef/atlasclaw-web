import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://atlasclaw.ai",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()]
});
