module.exports = {
  purge: false, // purge is setup in gatsby-config
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "hsl(0, 0%, 0%)",
          90: "hsla(0, 0%, 0%, .9)",
          70: "hsla(0, 0%, 0%, .7)",
          50: "hsla(0, 0%, 0%, .5)",
          30: "hsla(0, 0%, 0%, .3)",
          10: "hsla(0, 0%, 0%, .1)",
        },
        white: {
          DEFAULT: "hsl(0, 0%, 100%)",
          90: "hsla(0, 0%, 100%, .9)",
          70: "hsla(0, 0%, 100%, .7)",
          50: "hsla(0, 0%, 100%, .5)",
          30: "hsla(0, 0%, 100%, .3)",
          10: "hsla(0, 0%, 100%, .1)",
        },
      },
    },
  },
  variants: {
    zIndex: ["responsive", "hover", "focus"],
  },
  plugins: [],
}
