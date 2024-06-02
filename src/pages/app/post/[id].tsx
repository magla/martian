import React from 'react';
import useConsoleLog from '../../../hooks/useConsoleLog';
import usePrivateRoute from '../../../hooks/usePrivateRoute';

const componentName = 'Post';

function Post() {
  usePrivateRoute();
  useConsoleLog(componentName);
  // const post = props.data;

  return <div>kjhgjhf</div>;
  // return (
  //   <div>
  //     <h1>{post.frontmatter.title}</h1>
  //     <div dangerouslySetInnerHTML={{ __html: post.html }} />
  //   </div>
  // );
}

export default Post;

// export const pageQuery = graphql`
//   query ($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `;
