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
        primary:"var(--primary)",
        secondary:"var(--secondary)",
        tertionary:"var(--tertionary)"

      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        Manrope:['Manrope','sans-serif']
      },
      width: {
        '40p': '40%', 
      },
    },
  },
  plugins: [],
};
export default config;