import { Comment, Post } from '../types';

export interface AppPost extends Post {
  comments: Comment[];
}

export const mapPosts = (posts?: Post[], comments?: Comment[]): AppPost[] => {
  if (!posts) {
    return [];
  }

  return posts.map((post) => ({
    ...post,
    comments: comments ? comments.filter((comment) => comment.postId === post.id) : [],
  }));
};
