module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: { mobile: '375px', desktop: '1440px' },
    fontFamily: {
      poppins: ['Poppins']
    },
    extend: {
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        orange: 'hsl(0, 87%, 67%)',
        grey: 'hsl(0, 0%, 75%)',
        greyishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%)'
      }
    }
  },
  plugins: []
}
