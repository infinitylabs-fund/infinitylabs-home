/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/*.{vue,js,ts,jsx,tsx}",
    "./src/main.js",
    "./src/App.vue"
  ],
  theme: {
    extend: {
      screens: {
        ssm: { min: "900px", max: "1169px" },
        mo: { max: "900px" },
        md: [{ min: "900px", max: "1280px" }],
        sm: { min: "900px" }
      },
      width: {
        container: "1280px"
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
};
