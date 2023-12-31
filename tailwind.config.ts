import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   base: "#1A191E",
      //   primary: "#B41103",
      //   secondary: "#573630",
      // },
      colors: {
        base: "#1A2230",
        primary: "#1A191E",
        secondary: "#6d28d9",
      },
    },
  },
  plugins: [],
};
export default config;
