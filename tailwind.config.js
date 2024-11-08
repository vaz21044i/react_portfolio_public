/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    colors:{
      background:'#030712',
      blue_text:'#007bff',
      button_bg:'#007bff',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}