import colors from "tailwindcss/colors"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: colors.neutral[200],
          hover: colors.neutral[300],
          border: colors.neutral[400],
          text: colors.neutral[500],
          dark: colors.neutral[800],
          ["dark-hover"]: colors.neutral[900]
        },
        customBlue: '#1159E5',
        customLightBlue: '#E1EBFF',
      }
    }
  },
  gradientColorStops: (theme) => ({
    'custom-gradient': [
      'linear-gradient(0deg, #e5e5e5, #e5e5e5)',
      'linear-gradient(100.22deg, #bbceff 3.88%, #fbe3bf 57.64%)',
    ],
  }),
  plugins: [],
}

