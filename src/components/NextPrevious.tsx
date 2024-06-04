import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import useConsoleLog from '../hooks/useConsoleLog';
import useNextPrevious from '../hooks/useNextPrevious';

const componentName = 'Pagination';

type PaginationProps<T> = {
  onChange: React.Dispatch<React.SetStateAction<T[]>>;
  data: T[];
  perPage: number;
};

function NextPrevious<T>({ onChange, data, perPage }: PaginationProps<T>) {
  useConsoleLog(componentName);

  const [page, setPage] = useState(0);
  const { showNext, showPrevious } = useNextPrevious({ page, perPage, totalCount: data.length });

  const slice = useCallback(
    (nextPage: number) => {
      const firstPageIndex = (nextPage - 1) * perPage;
      const lastPageIndex = firstPageIndex + perPage;
      const newData = data.slice(firstPageIndex, lastPageIndex);

      setPage(nextPage);
      onChange(newData);
    },
    [data, perPage],
  );

  useEffect(() => {
    slice(1);
  }, [slice, perPage]);

  return (
    <div className="flex justify-between">
      {showPrevious && (
        <button
          className="flex items-center gap-2 ml-0 hover:text-red"
          onClick={() => slice(page - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
          Previous
        </button>
      )}
      {showNext && (
        <button
          className="flex items-center gap-2 ml-auto mr-0 hover:text-red"
          onClick={() => slice(page + 1)}
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
export default NextPrevious;
