/** @type {import('tailwindcss').Config} */
export default {
  // content: ["./src/**/*.{html,js}"],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },

    extend: {
      colors: {
        pizza: '#123456',

      },
    },
  },
  plugins: [],
}

