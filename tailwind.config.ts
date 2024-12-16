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
        tertionary:"var(--tertionary)"
      },
      fontFamily: {
        slab: ['"Port Lligat Slab"', 'serif'], 
        inter: ['Inter', 'sans-serif'],
        Manrope:['Manrope','sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;