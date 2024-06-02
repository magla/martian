import * as React from 'react';
import useConsoleLog from '../hooks/useConsoleLog';

const componentName = 'Centered';

const Centered = ({ children }: { children: React.ReactElement }) => {
  useConsoleLog(componentName);

  return <div className="flex flex-col w-full mx-auto bg-white md:max-w-xl">{children}</div>;
};

export default Centered;
