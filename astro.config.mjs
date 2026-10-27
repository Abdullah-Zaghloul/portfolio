// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// The only host-specific settings (D7). On a custom domain: site = the domain, base = "/".
const site = "https://abdullah-zaghloul.github.io";
const base = "/portfolio";

export default defineConfig({
  site,
  base,
  trailingSlash: "always",
  // The CSS is small (about 4 KB gzipped), so inlining it removes a render-blocking request.
  build: { inlineStylesheets: "always" },
  i18n: {
    defaultLocale: "ar",
    locales: ["ar", "en"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: "ar", locales: { ar: "ar", en: "en" } },
    }),
  ],
  fonts: [
    {
      // Temporary face until the identity phase picks the final pair (D6).
      provider: fontProviders.fontsource(),
      name: "IBM Plex Sans Arabic",
      cssVariable: "--font-plex",
      weights: [400, 700],
      styles: ["normal"],
      subsets: ["arabic", "latin"],
      fallbacks: ["sans-serif"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
