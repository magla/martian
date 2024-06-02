import * as React from 'react';
import { useMemo } from 'react';
import useApi, { Endpoints } from '../hooks/useApi';
import useConsoleLog from '../hooks/useConsoleLog';
import { AppPost, mapPosts } from '../mappers/post';
import { Comment, Post } from '../types';
import PostCard from './PostCard';

const componentName = 'PostList';

const PostList = () => {
  useConsoleLog(componentName);

  const apiPosts = useApi<Post[]>(Endpoints.post);
  const apiComments = useApi<Comment[]>(Endpoints.comment);
  const posts = useMemo(() => mapPosts(apiPosts, apiComments), [mapPosts, apiPosts, apiComments]);

  return (
    <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      {posts && posts.map((post: AppPost) => <PostCard post={post} />)}
    </div>
  );
};

export default PostList;
