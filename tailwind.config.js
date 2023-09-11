/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: 'var(--primary)',
      secondary: 'var(--secondary)',
      highlight1: 'var(--highlight1)',
      highlight2: 'var(--highlight2)',
      cream: 'var(--cream)',
      black: 'var(--ink)',
      white: '#fff',
      background_body: 'var(--background-body)'
    },
    extend: {
      fontFamily: {
        header: ['var(--font-agrandir)'],
        headerlight: ['var(--font-agrandir-regular)'],
        body: ['var(--font-literati)'],
      },
    },
  },
  plugins: [],
}
