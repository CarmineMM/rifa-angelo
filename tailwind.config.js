/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx,jsx,ts,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light'],
  },
}

