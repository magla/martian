import { AppPost, Comment, Post, User } from '../types';

export const mapPost = (post?: Post, comments?: Comment[], users?: User[]): AppPost | undefined => {
  if (!post) return undefined;

  return {
    ...post,
    comments: comments ? comments.filter((comment) => comment.postId === post?.id) : [],
    user: users ? users.find((user) => user.id === post?.userId) : undefined,
  };
};

export const mapPosts = (
  posts?: Post[],
  comments?: Comment[],
  users?: User[],
): (AppPost | undefined)[] => {
  if (!posts) {
    return [];
  }

  return posts.map((post) => post && mapPost(post, comments, users));
};
