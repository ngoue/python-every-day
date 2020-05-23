/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const siteAddress = new URL("https://pythoneveryday.com")

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "python every day",
    url: "https://pythoneveryday.com",
    description: "Everyday Python from someone who uses Python every day",
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-root-import",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: siteAddress.href.slice(0, -1),
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "python every day",
        short_name: "python every day",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#306998",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        // display: "standalone",
        icon: "src/images/python-every-day.png",
      },
    },
    {
      resolve: "gatsby-plugin-s3",
      options: {
        bucketName: siteAddress.hostname,
        protocol: siteAddress.protocol.slice(0, -1),
        hostname: siteAddress.hostname,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/posts`,
        name: "posts",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [],
      },
    },
  ],
}
