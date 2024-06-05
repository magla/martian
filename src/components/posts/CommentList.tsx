import useConsoleLog from 'hooks/useConsoleLog';
import React from 'react';
import { Comment as CommentType } from 'types';
import Comment from './Comment';

const componentName = 'CommentList';

const CommentList = ({ comments }: { comments?: CommentType[] }) => {
  useConsoleLog(componentName);

  return (
    <div className="pt-8">
      <h3 className="font-bold">Comments</h3>
      <div>{comments?.map((comment) => <Comment comment={comment} />)}</div>
    </div>
  );
};

export default CommentList;
