import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      serif: ["var(--font-serif)"],
      heading: ["var(--font-heading)"],
      calligraphy: ["var(--font-calligraphy)"],
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      background: "#FFFDFB",
      brown: "#af7e55",
      yellow: "#ebcd94",
      gray: "#707474",
      lightGray: "#D9D9D9",
    },
  },
  plugins: [],
};
export default config;
