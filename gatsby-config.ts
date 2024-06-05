import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: `Martian`,
    siteUrl: 'https://needstobetheproductionurl.com',
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Martian`,
        short_name: `martian`,
        start_url: `/`,
        background_color: `##ffffff`,
        theme_color: `#e25033`,
        display: `standalone`,
        icon: 'src/images/icon.png',
      },
    },
  ],
};

export default config;
