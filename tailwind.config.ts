import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#EDEDF0",
        paper: "#0A0A0B",
        card: "#0E1426",   // azul oscuro de las cajas
        accent: "#8B9CFF",
        muted: "#8B8D98",
        line: "#1F2A48",   // borde azulado
        tint: "#141B33",   // chips y fondos suaves
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
