import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        primary: "var(--primary-color)",
        light: "var(--light-color)",
        dark: "var(--dark-color)",
        textColor: "var(--font-color-first)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      fontSize: {
        sm: "var(--font-size-small)",
        base: "var(--font-size-base)",
        lg: "var(--font-size-medium)",
        xl: "var(--font-size-large)",
        nav: "var(--font-size-nav)",
      },
    },
  },
  plugins: [],
};

export default config;
