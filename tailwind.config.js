/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: 'var(--color-accent)',
        base: 'var(--color-base)',
        'base-dark': 'var(--color-base-dark)',
        'card-gradient': 'var(--color-card-gradient)'
      },
      boxShadow: {
        premium: '0 4px 32px 0 rgba(80,80,150,.10), 0 2px 4px 0 rgba(120,120,200,.07)'
      },
      borderRadius: {
        xl: '1.25rem',
      }
    },
  },
  plugins: [],
}
