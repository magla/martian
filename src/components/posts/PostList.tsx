import Pagination from 'components/pagination/Pagination';
import useConsoleLog from 'hooks/useConsoleLog';
import useScreenSize from 'hooks/useScreenSize';
import * as React from 'react';
import { useMemo, useState } from 'react';
import { AppPost } from 'types';
import PostCard from './PostCard';

const componentName = 'PostList';

const PostList = ({ posts }: { posts: (AppPost | undefined)[] }) => {
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
      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {showPosts.map((item?: any) => (
          <PostCard post={item} key={item?.id} />
        ))}
      </div>
    </>
  );
};

export default PostList;
