require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: "polenta",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.ACCESS_TOKEN,
        spaceId: process.env.SPACE_ID,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
}
