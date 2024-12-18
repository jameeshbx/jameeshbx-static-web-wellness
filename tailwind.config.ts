import { Playfair_Display } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        positive: "var(--positive)",
        negative: "var(--negative)",
        light: "var(--light)",
        primary:"var(--primary)",
        secondary:"var(--secondary)",
        tertionary:"var(--tertionary)",
        blackgrey:"var(--blackgrey)",
        lightblue: "var(--lightblue)",
        info:"var(--info)",
        grey:"var(--grey)",
        primarytext: "var(--primarytext)",
      },
      fontFamily: {
        slab: ['"Port Lligat Slab"', 'serif'], 
        inter: ['Inter', 'sans-serif'],
        Manrope:['Manrope','sans-serif'],
        playfair: ["Playfair Display", "serif"],
        Playfair_Display:['Playfair Display','sans-serif'],
      },
      height: {
        '98': '435px',
      },
      spacing: {
        '187': '187px',
        '28': '28px',
      },
    },
  },
  plugins: [],
};
export default config;