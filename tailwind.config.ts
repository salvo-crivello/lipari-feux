import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          hover: "rgb(var(--color-primary-hover) / <alpha-value>)",
          focus: "rgb(var(--color-primary-focus) / <alpha-value>)",
          active: "rgb(var(--color-primary-active) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
