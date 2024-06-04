import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Martian`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-sitemap',
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
