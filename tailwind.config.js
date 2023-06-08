/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      fundo: '#1a1a1a',
      bordas: '#434343',
      preencimento: '#313131',
      texto: '#a4a4a4',
      transparent: 'transparent',
      cinza: {
        50: '#f7f7f7',
        100: '#e3e3e3',
        200: '#c8c8c8',
        300: '#a4a4a4',
        400: '#818181',
        500: '#666666',
        600: '#515151',
        700: '#434343',
        800: '#383838',
        900: '#313131',
        950: '#1a1a1a',
      },
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}