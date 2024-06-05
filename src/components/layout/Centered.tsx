import useConsoleLog from 'hooks/useConsoleLog';
import * as React from 'react';

const componentName = 'Centered';

const Centered = ({ children }: { children: React.ReactElement }) => {
  useConsoleLog(componentName);

  return <div className="flex flex-col w-full px-4 mx-auto bg-white md:max-w-xl">{children}</div>;
};

export default Centered;
