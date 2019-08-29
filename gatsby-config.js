const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Jest Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@denningk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
          src: path.join(__dirname, 'src'),
          pages: path.join(__dirname, 'src/pages'),
          components: path.join(__dirname, 'src/components'),
          layouts: path.join(__dirname, 'src/layouts'),
          utils: path.join(__dirname, 'src/utils'),
          images: path.join(__dirname, 'src/images'),
          modules: path.join(__dirname, 'src/modules'),
      }
    }, 'gatsby-plugin-react-svg',
      {
          resolve: 'gatsby-plugin-web-font-loader',
          options: {
              custom: {
                  families: ['GE Inspira'],
                  urls: ['assets/fonts/stylesheet.css']
              }
          }
      },
    `gatsby-plugin-typescript`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
