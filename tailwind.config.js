module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'sp': '390px',
        'ss': '400px',
        'sb': '440px',
        'ab': '500px',
        'bb': '540px',
        'gb': '610px',
        'pm': '710px',
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
