module.exports = {
  siteMetadata: {
    title: "100DaysOfGatsby",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "rxh7TOIs9pjx7zWLdT2GicwrtIIeQL1wnIxYuWXxJD8",
        spaceId: "",
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
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
};
