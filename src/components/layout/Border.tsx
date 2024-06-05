import useConsoleLog from 'hooks/useConsoleLog';
import * as React from 'react';

const componentName = 'Border';

const Border = () => {
  useConsoleLog(componentName);

  return <div className="border-b border-black border-opacity-20"></div>;
};

export default Border;
