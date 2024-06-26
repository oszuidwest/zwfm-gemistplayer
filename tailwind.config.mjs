/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        roze: {
          DEFAULT: "#e6007e",
        },
        blauw: {
          DEFAULT: "#009fe3",
        },
      },
    },
  },
  plugins: [],
};
