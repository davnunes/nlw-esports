/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  // files that will content tailwind classes
      './src/**/*.tsx',
      './index.html'
  ],
  theme: {
    fontFamily: {
        sans: ['Inter', 'sans-serif']
    },
    extend: {
        backgroundImage: {
            'galaxy': "url('/background.png')",
            'nlw-gradient': "linear-gradient(86deg, #9572FC 18.08%, #43E7AD 70.94%, #E1D55D)",
            'game-gradient': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)"
        }
    },
  },
  plugins: [],
}
