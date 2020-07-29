module.exports = {
  siteMetadata: {
    title: `Thorium Nova`,
    name: `Thorium Nova`,
    siteUrl: `https://nova.thoriumsim.com`,
    description: `A reimagination of bridge simulator controls focused on balancing action and narrative.`,
    hero: {
      heading: `Thorium Nova Blog`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/thoriumsim`,
      },
      {
        name: `github`,
        url: `https://github.com/thorium-sim`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: "content/pages",
        name: "content/pages",
      },
    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/blog",
        rootPath: "/",
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-121191437-4",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Thorium Nova`,
        short_name: `Thorium Nova`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {},
    },
  ],
};
