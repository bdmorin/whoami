module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDarkBlue: '#21252b',
        bgMidBlue: '#282c34',
        bgLightBlue: '#333842',
        lbIconColor: '#9599a0',
        textWhite: '#f3f3f3',
        textMid: '#c2c2c2',
        textDark: '#909295',
        textBlue: '#636d83',
        textLightBlue: '#abb2bf',
        green: '#98c379',
        red: '#e06c75',
        cyan: '#56b6c2',
        midBlue: '#42a5f5',
        orange: '#d19a66',
        jsOrange: '#ffca28',
        darkOrange: '#e44d26',
        lightBrown: '#6e6352',
        pink: '#e13e76',
        purple: '#c678dd',
      },
      fontFamily: {
        sansFont: "'Ubuntu', sans-serif",
        monoFont: "'Ubuntu Mono', monospace"
      },
      screens: {
        'medmal': '500px'
      }
    },
  },
  plugins: [],
}