import Previous from 'components/svgs/Previous';
import useConsoleLog from 'hooks/useConsoleLog';
import * as React from 'react';

const componentName = 'PreviousButton';

function PreviousButton({ onClick }: { onClick: () => void }) {
  useConsoleLog(componentName);

  return (
    <button className="flex items-center gap-2 ml-0 hover:text-red" onClick={onClick}>
      <Previous />
      Previous
    </button>
  );
}
export default PreviousButton;
