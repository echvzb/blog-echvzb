/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: require("./site-meta-data.json"),
  plugins: [
    {
      resolve: `@isamrish/gatsby-plugin-google-adsense`,
      options: {
        googleAdClientId: "ca-pub-9824850955984281",
        head: true
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
      id: "GTM-N8FVFN4",
      includeInDevelopment: false,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog posts`,
        path: `${__dirname}/_data/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `serieses`,
        path: `${__dirname}/_data/series`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
        {
          resolve: 'gatsby-remark-emojis',
        }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eduardo Chavez Official Blog`,
        short_name: `echvzb`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#2D679B`,
        display: `standalone`,
        icon: "static/assets/echvzb-icon.svg",
      },
    },
    `gatsby-plugin-sass`, 
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-dark-mode',
    // siteURL is a must for sitemap generation
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-preact`,
  ],
}
