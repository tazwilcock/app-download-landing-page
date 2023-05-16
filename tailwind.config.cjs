module.exports = {
   content: ["./src/**/*.{astro,html}"],
   theme: {
      screens: {
         sm: "480px",
         md: "768px",
         lg: "976",
         xl: "1440",
      },
      extend: {
         colors: {
            strongCyan: "#26BBA4",
            lightBlue: "#25A9F5",
            darkGrayishBlue: "#00425A",
            grayishBlue: "#3C84AB",
         },
         fontFamily: {
            sans: ["Bai Jamjuree", "sans-serif"],
         },
      },
   },
   plugins: [],
}
