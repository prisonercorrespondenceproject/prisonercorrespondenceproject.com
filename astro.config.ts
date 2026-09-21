import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://prisonercorrespondenceproject.com",
  env: {
    schema: {
      PENPALS_PAGE_PASSWORD: envField.string({
        context: "server",
        access: "secret",
      }),
      PENPALS_PAGE_IFRAME_URL: envField.string({
        context: "server",
        access: "secret",
      }),
    },
  },
  trailingSlash: "never",
  redirects: {
    // "/resource-library": "TODO: add gdrive link"
    "product-category/newsletters": "/resource-library",
    "product-category/posters-outreach": "/resource-library",
    "product/the-word-is-out-20": "/resource-library",
    "product/the-word-is-out-23": "/resource-library",
    "product/the-word-is-out-26-music": "/resource-library",

    // leftover weird urls from wordpress
    "about-3": "/about",
    "about-2": "/donate",
    "contact-us-2": "/contact-us",
  },
  vite: { plugins: [tailwindcss()] },
  devToolbar: { enabled: false },
});
