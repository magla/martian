import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Martian&Machine`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Martian&Machine`,
        short_name: `martian`,
        start_url: `/`,
        background_color: `##ffffff`,
        theme_color: `#e25033`,
        display: `standalone`,
        icon: "src/images/icon.png",
      },
    },
    //This plugin exists only once but can consume an array of endpoints
    {
      resolve: "gatsby-source-rest-api",
      options: {
        endpoints: [`${process.env.API_URL}/posts`],
      },
    },
  ],
};

export default config;
