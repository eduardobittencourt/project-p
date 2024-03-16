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
      brown: "#af7e55",
      yellow: "#ebcd94",
      ambar: "#e4aa74",
      gray: "#707474",
    },
  },
  plugins: [],
};
export default config;
