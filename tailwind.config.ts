import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
       'custom-bg': "[url('/assets/instagram.png')] w-full h-[1100px]",

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FBEBB5",
        secondary: "#FAF4F4",
        newArrival: "#FFF9E5",
      },
    },
  },
  plugins: [],
};
export default config;
