import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = (): Queries.SiteSiteMetadata => {
  const data = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
