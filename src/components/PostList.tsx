import * as React from 'react';
import useConsoleLog from '../hooks/useConsoleLog';
import { AppPost } from '../mappers/post';
import PostCard from './PostCard';

const componentName = 'PostList';

const PostList = ({ posts }: { posts: (AppPost | undefined)[] }) => {
  useConsoleLog(componentName);

  return (
    <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      {posts && posts.map((post?: AppPost) => <PostCard post={post} key={post?.id} />)}
    </div>
  );
};

export default PostList;
