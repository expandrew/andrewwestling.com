import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["system-ui", "sans-serif"],
      },
      colors: {
        text: {
          DEFAULT: "#050708",
          dark: "#dddddd",
        },
        background: {
          DEFAULT: "#ffffff",
          dark: "#050708",
        },
        muted: {
          DEFAULT: "#666666",
          dark: "#898989",
        },
        highlight: {
          DEFAULT: "#efefef",
          dark: "#333333",
        },
        primary: "#f1553a",
        secondary: "#1d93b2",
        tertiary: "#b8c05d",
        accent: "#fcbb1a",
      },
      maxWidth: {
        container: "50rem",
      },
    },
  },
  plugins: [],
};
export default config;
