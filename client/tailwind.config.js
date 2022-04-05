module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'me-primary': '#3D7390',
        'me-secondary': '#15424B',
        'me-accent': '#FF7511',
      },
      fontFamily: {
        'me-saira': ['Saira Stencil One'],
        'me-sawarabi': ['Sawarabi Gothic', 'sans-serif']
      }
    },
  },
  plugins: [],
}
