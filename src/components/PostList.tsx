import * as React from 'react';
import useConsoleLog from '../hooks/useConsoleLog';

const componentName = 'PostList';

const PostList = () => {
  useConsoleLog(componentName);

  return (
    <div>
      <p>No blog posts found.</p>
    </div>
  );
};

export default PostList;
