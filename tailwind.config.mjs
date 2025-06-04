/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "var(--brand-color)",
          dark: "var(--brand-color-dark)",
        },
        social: {
          bluesky: "#00A8E8",
          facebook: {
            DEFAULT: "#3B5999",
            dark: "#5B79C9",
          },
          whatsapp: "#25D366",
          email: {
            DEFAULT: "#6b7280",
            dark: "#d1d5db",
          },
        },
      },
    },
  },
  plugins: [],
};
