/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        VazirLight: 'Vazir Light',
        VazirRegular: 'Vazir Regular',
        VazirMedium: 'Vazir Medium',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-last', '& > *:last-child');
      addVariant('child-first', '& > *:first-child');
      addVariant('child-hover', '& > *:hover');
  }
  ],
}