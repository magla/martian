import { useMemo } from 'react';

type UsePaginationProps = {
  totalCount: number;
  page: number;
  perPage: number;
};

const usePagination = ({ totalCount, page = 1, perPage }: UsePaginationProps) => {
  const totalPageCount = useMemo(() => Math.ceil(totalCount / perPage), [totalCount, perPage]);
  const showNext = useMemo(() => page < totalPageCount, [page, totalPageCount]);
  const showPrevious = useMemo(() => page > 1, [page]);

  return { showNext, showPrevious };
};

export default usePagination;
