import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
    imageService: "noop",
  }),
  integrations: [],
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    ssr: {
      external: ["sharp"],
      noExternal: ["astro"],
    },
    plugins: [
      tailwindcss({
        configPath: "./tailwind.config.mjs",
      }),
    ],
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/noop",
      config: {},
    },
  },
});
