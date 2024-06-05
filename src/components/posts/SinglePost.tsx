import Border from 'components/layout/Border';
import Centered from 'components/layout/Centered';
import CommentList from 'components/posts/CommentList';
import Previous from 'components/svgs/Previous';
import { Link, PageProps } from 'gatsby';
import useApi, { Endpoints, fetchFromAPI } from 'hooks/useApi';
import useConsoleLog from 'hooks/useConsoleLog';
import { mapPost } from 'mappers/post';
import React, { useMemo } from 'react';
import { Comment, Post, User } from 'types';

type DataTypes = {
  post: Post;
  comments: Comment[];
  user: User;
};

const componentName = 'SinglePost';

const SinglePost = ({ id, serverData }: PageProps & { id: string }) => {
  useConsoleLog(componentName);

  const { result: apiPost } = useApi<Post>(Endpoints.post, !!(serverData as DataTypes)?.post, id);
  const { result: apiComments } = useApi<Comment[]>(
    Endpoints.comment,
    !!(serverData as DataTypes)?.comments,
  );
  const { result: apiUser } = useApi<User>(
    Endpoints.user,
    !!(serverData as DataTypes)?.user,
    apiPost?.userId,
  );

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
            <p className="mb-2 leading-none text-darkGray">
              {apiUser?.name} (@{apiUser?.username})
            </p>
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

export async function getServerData({ id }: PageProps & { id: string }) {
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
