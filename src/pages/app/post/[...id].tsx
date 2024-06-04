import Border from 'components/layout/Border';
import Centered from 'components/layout/Centered';
import SEO from 'components/layout/SEO';
import CommentList from 'components/posts/CommentList';
import Previous from 'components/svgs/Previous';
import { Link, PageProps } from 'gatsby';
import useApi, { Endpoints, fetchFromAPI } from 'hooks/useApi';
import useConsoleLog from 'hooks/useConsoleLog';
import usePrivateRoute from 'hooks/usePrivateRoute';
import { mapPost } from 'mappers/post';
import React, { useMemo } from 'react';
import { Comment, Post, User } from 'types';

const componentName = 'SinglePost';

const SinglePost = ({ params, location, serverData }: PageProps) => {
  usePrivateRoute(location);
  useConsoleLog(componentName);

  const id = params[`id`];

  const apiPost = (serverData as any)?.post || useApi<Post>(Endpoints.post, id);
  const apiComments = (serverData as any)?.comments || useApi<Comment[]>(Endpoints.comment);
  const apiUser = (serverData as any)?.user || useApi<User>(Endpoints.user, apiPost?.userId);

  const post = useMemo(() => mapPost(apiPost, apiComments), [mapPost, apiPost, apiComments]);

  return (
    <div>
      <div className="flex flex-col items-center h-full p-8 bg-white sm:flex-row">
        <div className="relative block p-6 sm:absolute hover:text-red">
          <Link to="/app/">
            <Previous />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center pt-6 leading-normal grow">
          <h2 className="max-w-xs mb-2 text-2xl font-bold text-center first-letter:uppercase sm:max-w-md md:max-w-lg lg:max-w-4xl">
            {post?.title}
          </h2>
          <div className="text-sm text-black">
            <p className="mb-2 leading-none text-darkGray">{apiUser?.name}</p>
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
    </div>
  );
};

export const Head = ({ params, serverData }: PageProps) => {
  const apiPost = (serverData as any)?.post || useApi<Post>(Endpoints.post, params.id);

  return <SEO title={apiPost?.title} />;
};

export async function getServerData({ params }: PageProps) {
  const id = params[`id`];
  const postUrl = `${process.env.GATSBY_API_URL}/${Endpoints.post}${id ? `/${id}` : ''}`;
  const commentsUrl = `${process.env.GATSBY_API_URL}/${Endpoints.comment}`;

  try {
    const post = await fetchFromAPI<Post>(postUrl);
    const comments = await fetchFromAPI<Comment[]>(commentsUrl);

    const userUrl = `${process.env.GATSBY_API_URL}/${Endpoints.user}${post?.userId ? `/${post.userId}` : ''}`;
    const user = await fetchFromAPI<User>(userUrl);

    return {
      status: 200,
      props: { post, comments, user },
    };
  } catch (e: any) {
    return {
      status: 500,
      props: {},
    };
  }
}

export default SinglePost;
