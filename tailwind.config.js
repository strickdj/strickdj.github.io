module.exports = {
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      colors: {
        black: {
          default: 'hsl(0, 0%, 0%)',
          90: 'hsla(0, 0%, 0%, .9)',
          70: 'hsla(0, 0%, 0%, .7)',
          50: 'hsla(0, 0%, 0%, .5)',
          30: 'hsla(0, 0%, 0%, .3)',
          10: 'hsla(0, 0%, 0%, .1)',
        },
        white: {
          default: 'hsl(0, 0%, 100%)',
          90: 'hsla(0, 0%, 100%, .9)',
          70: 'hsla(0, 0%, 100%, .7)',
          50: 'hsla(0, 0%, 100%, .5)',
          30: 'hsla(0, 0%, 100%, .3)',
          10: 'hsla(0, 0%, 100%, .1)',
        },
        beige: 'hsl(47,94.9%,92.4%)',
        comb: {
          default: 'hsl(356,74.4%,42.9%)',
          dark: 'hsl(353,73.3%,26.5%)',
        },
        beak: 'hsl(26,74.4%,42.9%)',
        foot: 'hsl(37,93.8%,74.5%)',
        feather: {
          default: 'hsl(35,11%,69.6%)',
          grey: 'hsl(40,13.6%,34.5%)',
          dark: 'hsl(20,6.7%,17.6%)',
          black: 'hsl(12,21.7%,4.5%)',
        },
        t: {
          default: 'hsl(86,74.4%,42.9%)',
          green: 'hsl(116,74.4%,42.9%)',
          teal: 'hsl(176,74.4%,42.9%)',
          purple: 'hsl(266,74.4%,42.9%)',
        },
        primary: 'var(--color-primary)',
      }
    },
  },
  variants: {
    zIndex: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
