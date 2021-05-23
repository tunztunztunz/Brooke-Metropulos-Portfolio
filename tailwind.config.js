module.exports = {
  purge: {
    content: ['./pages/**/*.js', './components/**/*.js'],
    options: {
      safelist: ['text-pink', 'text-red', 'text-blue'],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      gopher: ['Gopher', 'sans-serif'],
      neue: ['"Neue Haas Unica"', 'sans-serif'],
    },
    extend: {
      colors: {
        red: {
          DEFAULT: '#c90000',
        },
        blue: {
          DEFAULT: '#0000b9',
        },
        pink: {
          DEFAULT: '#e29ce1',
        },
        gray: {
          DEFAULT: '#111827',
        },
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
