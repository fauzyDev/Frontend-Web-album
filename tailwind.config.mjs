import withMT from "@material-tailwind/react/utils/withMT";
import preline from 'preline/plugin';
import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        futuristic: {
          neonPink: "#FF007F",  // Neon Pink
          electricBlue: "#1B03A3", // Biru Elektrik
          brightCyan: "#00FFFF",  // Cyan Cerah
          neonGreen: "#39FF14",   // Hijau Neon
          purpleHaze: "#8A2BE2",  // Ungu Haze
          darkBackground: "#121212", // Latar Belakang Gelap
          cyberYellow: "#FFD700", // Kuning Cyber
          ultraViolet: "#7F00FF",  // Ultraviolet
        },  
      }
    },
  },
  plugins: [
    preline,
    daisyui,
  ],
  daisyui: {
    themes: ["winter"]
  },
  preline: {
    theme: {
        screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    }
  }
});
