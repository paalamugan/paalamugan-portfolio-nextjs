const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      // Override Tailwind CSS default colors
      primary: withOpacityValue("--primary-color"), // Use classes like `bg-primary/75`
      secondary: withOpacityValue("--secondary-color"),
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      red: colors.red,
      blue: colors.blue,
      transparent: "transparent",
      current: "currentColor",
      github: "var(--github-color)",
      linkedin: "var(--linkedin-color)",
      twitter: "var(--twitter-color)",
      facebook: "var(--facebook-color)",
      instagram: "var(--instagram-color)",
      hackerrank: "var(--hackerrank-color)",
    },
    extend: {
      colors: {
        // Added some extra Tailwind CSS along with default colors
        blue: {
          950: "#17275c",
        },
      },
      fontFamily: {
        dmSans: ["var(--font-dmSans)", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
