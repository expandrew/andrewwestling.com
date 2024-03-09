import type { Config } from "tailwindcss";

export type AwdsColor = {
  DEFAULT: string;
  dark?: string;
};

export const awdsColors: {
  [color: string]: AwdsColor;
} = {
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
  primary: {
    DEFAULT: "#f1553a",
  },
  secondary: {
    DEFAULT: "#1d93b2",
  },
  tertiary: {
    DEFAULT: "#b8c05d",
  },
  accent: {
    DEFAULT: "#fcbb1a",
  },
};

const config: Config = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["system-ui", "sans-serif"],
      },
      colors: awdsColors,
      maxWidth: {
        container: "50rem",
      },
    },
  },
  plugins: [],
};
export default config;
