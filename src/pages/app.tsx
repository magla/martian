import * as React from "react";
import { graphql, PageProps } from "gatsby";

const BlogIndex = ({ data }: PageProps<Queries.Query>) => {
  return (
    <div>
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
