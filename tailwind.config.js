/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#F7F7F7",
        "secondary": "#EDEDED"
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

