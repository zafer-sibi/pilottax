/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        bannerImage1:"url('./images/banner-1.jpg')",
        bannerImage2:"url('./images/banner-2.jpg')",
        bannerImage3:"url('./images/banner-3.jpg')",
        blackOverlay:"linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,0.8) 100%)"
      },
      colors: {
        'overlay-blue': '#002e5b',
      },
    },
  },
  plugins: [],
}

