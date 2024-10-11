import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': { 'max': '380px' },
      'sm': { 'max': '640px' },
      md: { min: "641px", max: "1023px" },
      lg: { min: "1024px", max: "1522px" },
      // 'lg': { 'max': '1023px' },
      'xl': { 'max': '1279px' },
      '2xl': { 'max': '1536px' },
      '3xl': { 'max': '1735px' },
    },
    extend: {
      animation: {
        "puff-in-center": "puff-in-center 0.2s 3 both",
        "bounce-in-bck": "bounce-in-bck 0.4s cubic-bezier(0.680, -0.550, 0.265, 1.550) 3 alternate both",
        "roll-in-blurred-left": "roll-in-blurred-left 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
        "roll-in-blurred-right": "roll-in-blurred-right 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both"
      },
      keyframes: {
        "puff-in-center": {
          "0%": {
            transform: "scale(2)",
            filter: "blur(4px)",
            opacity: " 0"
          },
          "100%": {
            transform: "scale(1)",
            filter: "blur(0px)",
            opacity: "1"
          }
        },
        "bounce-in-bck": {
          "0%": {
            "transform": "scale(7)",
            "animation-timing-function": "ease-in",
            "opacity": "0",
          },
          "38%": {
            "transform": "scale(1)",
            "animation-timing-function": "ease-out",
            "opacity": "1"
          },
          "55%": {
            "transform": "scale(1.5)",
            "animation-timing-function": "ease-in"
          },
          "72%": {
            "transform": "scale(1)",
            "animation-timing-function": "ease-out"
          },
          "81%": {
            "transform": "scale(1.24)",
            "animation-timing-function": "ease-in"
          },
          "89%": {
            "transform": "scale(1)",
            "animation-timing-function": "ease-out"
          },
          "95%": {
            "transform": "scale(1.04)",
            "animation-timing-function": "ease-in"
          },
          "100%": {
            "transform": "scale(1)",
            "animation-timing-function": "ease-out"
          }
        },
        "roll-in-blurred-left": {
          "0%": {
            "-webkit-transform": "translateX(-1000px) rotate(-720deg)",
            "transform": " translateX(-1000px) rotate(-720deg)",
            "-webkit-filter": "blur(50px)",
            "filter": "blur(50px)",
            "opacity": "0"
          },

          "100%": {
            "-webkit-transform": "translateX(0) rotate(0deg)",
            "transform": "translateX(0) rotate(0deg)",
            "-webkit-filter": "blur(0)",
            "filter": "blur(0)",
            "opacity": "1"
          }
        },
        "roll-in-blurred-right": {
          "0%": {
            "-webkit-transform": "translateX(1000px) rotate(720deg)",
            "transform": " translateX(1000px) rotate(720deg)",
            "-webkit-filter": "blur(50px)",
            "filter": "blur(50px)",
            "opacity": "0"
          },

          "100%": {
            "-webkit-transform": "translateX(0) rotate(0deg)",
            "transform": "translateX(0) rotate(0deg)",
            "-webkit-filter": "blur(0)",
            "filter": "blur(0)",
            "opacity": "1"
          }
        }
      },
      backgroundImage: {
        "orange-linear-100": "linear-gradient(180deg, #FFFFFF 0%, #F7C891 8.5%, #F3AC59 12.75%, #EC6615 77%, #944617 100%)",
        "yellow-linear-100": "linear-gradient(180deg, #FFFF00 0%, #FBB03B 22.6%, #F7931E 47.24%, #F37830 64.12%, #F16A3A 76%, #F37433 84.61%, #F79020 99.46%, #F7931E 100.65%)",
        "yellow-radial": "radial-gradient(47.55% 47.55% at 50% 14.71%, #FFF4C0 0.07%, #FFE02E 100%)",
        "black-linear": "linear-gradient(180deg, rgba(22, 24, 30, 0) 41.53%, #000000 100%)"
      },
      colors: {
        "yellow-100": "#FFE02E",
        "yellow-200": "#FFC850",
        "yellow-300": "#F3BA2F",
        "yellow-drop-shadow": "0px 0px 16px 0px #F3BA2F",
        "brown-400": "#291911",
        "brown-500": "#35241C",
        "orange-100": "#F08E3C",
        "light-brown-100": "#DCC794",
        "light-brown-200": "#C8AA7A",
        "border-rewards": "#423520"
      },
    },
  },
  plugins: [],
};
export default config;
