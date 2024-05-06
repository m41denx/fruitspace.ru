/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./locales/tours/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: true
  },
  theme: {
    extend: {
      colors: {
        "primary": "#0d6efd",
        "success": "#43b581",
        "error": "#f04747",

        "btn": "#484a4d",
        "btn-hover": "#525357",

        "subtle": "#333338",
        "active": "#212125",
        "dark": "#090912",
      },
      fontFamily: {
        "avant": "ITC Avant Garde Std Md, sans-serif",
      },
      height: {
        "112": "28rem",
        "128": "32rem",
        "144": "36rem",
        "160": "40rem",
        "176": "44rem",
        "192": "48rem",
      }
    },
  },
  plugins: [
      require('@tailwindcss/typography')
  ],
}
