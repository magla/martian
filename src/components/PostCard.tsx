import * as React from 'react';
import { useMemo } from 'react';
import useApi, { Endpoints } from '../hooks/useApi';
import useConsoleLog from '../hooks/useConsoleLog';
import { AppPost } from '../mappers/post';
import { User } from '../types';

const componentName = 'PostCard';

const PostCard = ({ post }: { post: AppPost }) => {
  useConsoleLog(componentName);

  const user = useApi<User>(Endpoints.user, post.userId);
  const commentsText = useMemo(() => (post.comments.length === 1 ? 'comment' : 'comments'), [post]);

  return (
    <a href={`/app/post/${post.id}`} className="duration-100 hover:scale-110">
      <div className="flex justify-between h-full px-6 py-4 overflow-hidden duration-100 bg-white border border-black border-opacity-20 min-h-4 hover:text-red">
        <div className="flex flex-col justify-between leading-normal">
          <h2 className="mb-2 font-bold text-l first-letter:uppercase">{post.title}</h2>
          <div className="text-sm text-black">
            <p className="mb-2 leading-none text-darkGray">{user?.name}</p>
            <p className="mb-2 leading-none text-darkGray">
              {post.comments.length} {commentsText}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default PostCard;
