const colors = require('tailwindcss/colors');

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./container/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    colors: { // Override Tailwind CSS default colors
      primary: withOpacityValue('--primary-color'), // Use classes like `bg-primary/75`
      secondary: withOpacityValue('--secondary-color'),
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      red: colors.red,
      transparent: 'transparent',
      current: 'currentColor',
      github: 'var(--github-color)',
      linkedin: 'var(--linkedin-color)',
      twitter: 'var(--twitter-color)',
      facebook: 'var(--facebook-color)',
      instagram: 'var(--instagram-color)',
    },
    fontFamily: {
      base: "var(--font-base)",
      creeper: "var(--font-creeper)",
    },
    extend: {
      colors: { // Added some extra Tailwind CSS along with default colors
        blue: {
          950: '#17275c',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}