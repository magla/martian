import React, { useMemo } from 'react';
import Centered from '../../../components/Centered';
import useApi, { Endpoints } from '../../../hooks/useApi';
import useConsoleLog from '../../../hooks/useConsoleLog';
import { mapPost } from '../../../mappers/post';
import { Comment, Post, User } from '../../../types';

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
      <div className="flex h-full p-8 bg-white border border-black border-opacity-20">
        <div className="flex items-center hover:text-red">
          <a href="/app" className="absolute p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center pt-6 leading-normal grow">
          <h2 className="mb-2 text-2xl font-bold first-letter:uppercase">{post?.title}</h2>
          <div className="text-sm text-black">
            <p className="mb-2 leading-none text-darkGray">{user?.name}</p>
          </div>
        </div>
      </div>
      <div className="pt-12 pb-24">
        <Centered>
          <p className="mb-12 first-letter:uppercase">{post?.body}</p>
        </Centered>
        <div className="border-b border-black border-opacity-20"></div>
        <Centered>
          <div className="pt-8">
            <h3 className="font-bold">Comments</h3>
            <div>
              {post?.comments.map((comment) => (
                <>
                  <p key={comment.id} className="mt-4 text-black first-letter:uppercase">
                    {comment.body}
                  </p>
                  --- <span className="text-darkGray">{comment.name}</span>
                </>
              ))}
            </div>
          </div>
        </Centered>
      </div>
    </>
  );
};

export default SinglePost;
