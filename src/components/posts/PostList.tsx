import Centered from 'components/layout/Centered';
import Pagination from 'components/pagination/NextPrevious';
import useConsoleLog from 'hooks/useConsoleLog';
import useScreenSize from 'hooks/useScreenSize';
import * as React from 'react';
import { useMemo, useState } from 'react';
import { AppPost } from 'types';
import PostCard from './PostCard';

const componentName = 'PostList';

const PostList = ({ posts, loading }: { posts: (AppPost | undefined)[]; loading: boolean }) => {
  useConsoleLog(componentName);

  const [showPosts, setShowPosts] = useState(posts);
  const { md, lg } = useScreenSize();

  const perPage = useMemo(() => {
    if (md) {
      return 12;
    }

    return 20;
  }, [md, lg]);

  return (
    <>
      <div className="mb-6">
        <Pagination<AppPost | undefined> data={posts} onChange={setShowPosts} perPage={perPage} />
      </div>
      {showPosts.length || loading ? (
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {showPosts.map((item?: any) => (
            <PostCard post={item} key={item?.id} />
          ))}
        </div>
      ) : (
        <Centered>
          <div className="text-center">
            <h2>No blog posts found.</h2>
          </div>
        </Centered>
      )}
    </>
  );
};

export default PostList;
