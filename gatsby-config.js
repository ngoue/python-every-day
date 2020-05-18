/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "python every day",
    url: "https://pythoneveryday.com",
    description: "Everyday Python from someone who uses Python every day",
  },
  plugins: [
    "gatsby-plugin-root-import",
    "gatsby-plugin-sass",
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
        icon: "src/images/python.png",
      },
    },
  ],
}
