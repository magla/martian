import useConsoleLog from 'hooks/useConsoleLog';
import React from 'react';
import { Comment as CommentType } from 'types';

const componentName = 'Comment';

const Comment = ({ comment }: { comment: CommentType }) => {
  useConsoleLog(componentName);

  return (
    <>
      <p key={comment.id} className="mt-4 text-black first-letter:uppercase">
        {comment.body}
      </p>
      --- <span className="text-darkGray">{comment.name}</span>
    </>
  );
};

export default Comment;
