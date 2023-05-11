const {fontFamily} = require ("tailwindcss/defaultTheme")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth:{
      container:"1520px",
      contentContainer:"1280px",
    },
    extend: {
      xs:"320px",
      sm:"375px",
      sml:"500px",
      md:"667px",
      mdl:"768px",
      lg:"960px",
      lgl:"1024px",
      xl:"1280px",
      "2xl":"1400px",
    },
    colors:{
      blue:"#0071dc",
      lightBlue:"#e6f1fc",
      yellow:"#ffc220",
      hoverBg:"#004f9a",
      ligthText:"#46474a",
      green:"0abf53",
    },
    boxShadow:{
      bannerShadow: "0 1px 2px 1px #00000026",
    },
    fontFamily:{
      sans:["var(--font-open_Sans)",...fontFamily.sans]
    }
  },
  plugins: [require("daisyui")],
}