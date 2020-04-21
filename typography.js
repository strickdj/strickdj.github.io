// import Typography from "typography"
const Typography = require("typography")

const theme = {
  title: "Daris Strickland's Blog",
  baseFontSize: "18px",
  scaleRatio: 5 / 2,
  headerFontFamily: ["PT Sans", "Arial", "Helvetica", "sans-serif"],
  bodyFontFamily: ["PT Serif", "Georgia", "serif"],
  includeNormalize: false,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    h1: {
      fontFamily: ["PT Sans", "sans-serif"].join(","),
    },
  }),
}

theme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      textDecoration: "none",
    },
  }
}

const typography = new Typography(theme)

console.log(typography.toString())
