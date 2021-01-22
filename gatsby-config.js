var site_title = `Daris Strickland`

var purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: [
    "./src/**/*.html",
    "./src/**/*.jsx",
    "./src/**/*.js",
    // etc.
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
})

module.exports = {
  siteMetadata: {
    title: site_title,
    author: {
      name: `Daris Strickland`,
      summary: ``, // todo: write a summary
    },
    description: ``, // todo: write a blog description
    siteUrl: `https://darisstrickland.com/`,
    social: {},
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          // require("postcss-import")(),
          require("tailwindcss")(),
          ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss")(),
          ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: site_title,
        short_name: `Daris Strickland`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/profile-pic.jpg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./src",
        aliases: {
          "@components": "./components",
          "@hooks": "./hooks",
          "@images": "./images",
          "@utils": "./utils",
        },
      },
    },
    {
      resolve: `gatsby-plugin-goatcounter`,
      options: {
        // Either `code` or `selfHostUrl` is required.
        // REQUIRED IF USING HOSTED GOATCOUNTER! https://[my_code].goatcounter.com
        code: "strickland",
        // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,

        // Allow requests from local addresses (localhost, 192.168.0.0, etc.)
        // for testing the integration locally.
        // TIP: set up a `Additional Site` in your GoatCounter settings
        // and use its code conditionally when you `allowLocal`, example below
        allowLocal: false,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
