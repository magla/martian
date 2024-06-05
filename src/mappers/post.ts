import { Comment, Post } from '../types';

export interface AppPost extends Post {
  comments: Comment[];
}

export const mapPost = (post?: Post, comments?: Comment[]): AppPost | undefined => {
  if (!post) return undefined;

  return {
    ...post,
    comments: comments ? comments.filter((comment) => comment.postId === post.id) : [],
  };
};

export const mapPosts = (posts?: Post[], comments?: Comment[]): (AppPost | undefined)[] => {
  if (!posts) {
    return [];
  }

  return posts.map((post) => mapPost(post, comments));
};
