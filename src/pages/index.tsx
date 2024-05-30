import * as React from "react";
import { graphql, PageProps } from "gatsby";

const BlogIndex = ({ data }: PageProps<Queries.Query>) => {
  const siteTitle = data.site?.siteMetadata?.title || `Title`;

  return (
    <div>
      <h1>{siteTitle}</h1>
      <p>No blog posts found.</p>
    </div>
  );
};

export default BlogIndex;

export const Head = () => <div title="All posts" />;

export const query = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
