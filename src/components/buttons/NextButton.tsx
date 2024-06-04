import Next from 'components/svgs/Next';
import useConsoleLog from 'hooks/useConsoleLog';
import * as React from 'react';

const componentName = 'NextButton';

function NextButton({ onClick }: { onClick: () => void }) {
  useConsoleLog(componentName);

  return (
    <button className="flex items-center gap-2 ml-auto mr-0 hover:text-red" onClick={onClick}>
      Next
      <Next />
    </button>
  );
}
export default NextButton;
