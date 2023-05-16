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
            strongCyan: "#27E1C1",
            lightBlue: "#2DCDDF",
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
