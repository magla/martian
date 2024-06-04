import { useMemo } from 'react';

type UseNextPreviousProps = {
  totalCount: number;
  page: number;
  perPage: number;
};

const useNextPrevious = ({ totalCount, page = 1, perPage }: UseNextPreviousProps) => {
  const totalPageCount = useMemo(() => Math.ceil(totalCount / perPage), [totalCount, perPage]);
  const showNext = useMemo(() => page < totalPageCount, [page, totalPageCount]);
  const showPrevious = useMemo(() => page > 1, [page]);

  return { showNext, showPrevious };
};

export default useNextPrevious;
