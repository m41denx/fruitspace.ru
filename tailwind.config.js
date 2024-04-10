/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./locales/tours/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: false
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
      }
    },
  },
  plugins: [],
}
