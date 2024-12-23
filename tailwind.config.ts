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
        violet:"var(--violet)",
        purple:"var(--purple)",
        pink:"var(--pink)",
        darkpink:"var(--darkpink)",
        cream: "var(--cream)",
        darkblue:"var(--darkblue)",
        cream: "var(--cream)",
        lightpink: "var(--lightpink)",
      },
      fontFamily: {
        slab: ['"Port Lligat Slab"', 'serif'], 
        inter: ['Inter', 'sans-serif'],
        manrope:['Manrope','sans-serif'],
        playfair:['"Playfair Display"','serif']
      },
      spacing: {
        '187': '187px',
        '28': '28px',
        '128':'128px',
        '179':'179px',
        '96':'96px',
        '725':'725px',
        '433':'433px',
        '53':'53px',
        '443':'443px',
        '167':'167px',
        '365':'365px',
        '264':'264px',
        '324':'324px',
        '40':'40px',
        '458':'458px'

      },
      height:{
        '98': '435px',
        '688':'688px',
        '131':'131vh',
        '93':'93vh',
        '443':'443px',
        '400':'400px',
        '80':'80px',
        '100':'100px',
        '160':'160px',
        '200':'200px',
        '212':'212',
        '280':'280',
        '360':'360'
      },
      width:{
        '246':'246vh',
        '1682':'1682px',
        '40': '40%', 
        '40p': '40%', 
        '900':'900px'
      },
      letterSpacing: {
        '-2': '-0.02em', 
      },
      borderRadius: {
        '32': '32px', 
      },    
      
    },
  },
  plugins: [],
};
export default config;