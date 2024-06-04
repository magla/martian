import Border from 'components/layout/Border';
import Centered from 'components/layout/Centered';
import SEO from 'components/layout/SEO';
import CommentList from 'components/posts/CommentList';
import Previous from 'components/svgs/Previous';
import useApi, { Endpoints } from 'hooks/useApi';
import useConsoleLog from 'hooks/useConsoleLog';
import { mapPost } from 'mappers/post';
import React, { useMemo } from 'react';
import { Comment, Post, User } from 'types';

const componentName = 'SinglePost';

const SinglePost = ({ params }: { params: { id: string } }) => {
  const id = params[`id`];

  useConsoleLog(componentName);

  const apiPost = useApi<Post>(Endpoints.post, id);
  const apiComments = useApi<Comment[]>(Endpoints.comment);

  const user = useApi<User>(Endpoints.user, apiPost?.userId);
  const post = useMemo(() => mapPost(apiPost, apiComments), [mapPost, apiPost, apiComments]);

  return (
    <>
      <div className="flex flex-col items-center h-full p-8 bg-white sm:flex-row">
        <a href="/app" className="relative block p-6 sm:absolute hover:text-red">
          <Previous />
        </a>
        <div className="flex flex-col items-center justify-center pt-6 leading-normal grow">
          <h2 className="max-w-xs mb-2 text-2xl font-bold text-center first-letter:uppercase sm:max-w-md md:max-w-lg lg:max-w-4xl">
            {post?.title}
          </h2>
          <div className="text-sm text-black">
            <p className="mb-2 leading-none text-darkGray">{user?.name}</p>
          </div>
        </div>
      </div>
      <Border />
      <div className="pt-12 pb-48">
        <Centered>
          <p className="mb-12 first-letter:uppercase">{post?.body}</p>
        </Centered>
        <Border />
        <Centered>
          <CommentList comments={post?.comments} />
        </Centered>
      </div>
    </>
  );
};

export const Head = ({ params }: { params: { id: string } }) => {
  const apiPost = useApi<Post>(Endpoints.post, params.id);

  return <SEO title={apiPost?.title} />;
};

export default SinglePost;
