import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E2E3E",
        secondary: "#AD9071",
        tertiary: "#172533",
        quat: "#26394c",
        qiat: "#405D79",
      },
    },
  },
  plugins: [],
} satisfies Config;
