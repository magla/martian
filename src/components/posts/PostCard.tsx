import { Link } from 'gatsby';
import useConsoleLog from 'hooks/useConsoleLog';
import * as React from 'react';
import { useMemo } from 'react';
import { AppPost } from 'types';

const componentName = 'PostCard';

const PostCard = ({ post }: { post?: AppPost }) => {
  useConsoleLog(componentName);

  if (!post) {
    return null;
  }

  const commentsText = useMemo(() => (post.comments.length === 1 ? 'comment' : 'comments'), [post]);

  return (
    <div className="duration-100 hover:scale-110">
      <Link to={`/post/${post.id}/`}>
        <div className="flex justify-between h-full px-6 py-4 overflow-hidden duration-100 bg-white border border-black border-opacity-20 min-h-4 hover:text-red">
          <div className="flex flex-col justify-between leading-normal">
            <h2 className="mb-2 font-bold text-l first-letter:uppercase">{post.title}</h2>
            <div className="text-sm text-black">
              <p className="mb-2 leading-none text-darkGray">
                {post.user?.name} (@{post.user?.username})
              </p>
              <p className="mb-2 leading-none text-darkGray">
                {post.comments.length} {commentsText}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
