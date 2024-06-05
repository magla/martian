import useConsoleLog from 'hooks/useConsoleLog';
import * as React from 'react';

const componentName = 'Next';

function Next({ size = 6 }: { size?: number }) {
  useConsoleLog(componentName);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`size-${size}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
      />
    </svg>
  );
}
export default Next;
