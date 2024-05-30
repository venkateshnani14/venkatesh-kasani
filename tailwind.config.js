/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        smokewhite:"#f5f5f5",
        customgray:"#b4b4b4",
        submitbg:"#686868",
      },
      // height:{
      //   200:"200px"
      // }
    },
  },
  plugins: [],
}

