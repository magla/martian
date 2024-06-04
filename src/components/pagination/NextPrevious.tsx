import NextButton from 'components/buttons/NextButton';
import PreviousButton from 'components/buttons/PreviousButton';
import useConsoleLog from 'hooks/useConsoleLog';
import usePagination from 'hooks/usePagination';
import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';

const componentName = 'Pagination';

type PaginationProps<T> = {
  onChange: React.Dispatch<React.SetStateAction<T[]>>;
  data: T[];
  perPage: number;
};

function Pagination<T>({ onChange, data, perPage }: PaginationProps<T>) {
  useConsoleLog(componentName);

  const [page, setPage] = useState(0);
  const { showNext, showPrevious } = usePagination({ page, perPage, totalCount: data.length });

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
      {showPrevious && <PreviousButton onClick={() => slice(page - 1)} />}
      {showNext && <NextButton onClick={() => slice(page + 1)} />}
    </div>
  );
}
export default Pagination;
