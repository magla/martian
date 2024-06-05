import useConsoleLog from 'hooks/useConsoleLog';
import * as React from 'react';
import SEO from './SEO';

const componentName = 'Layout';

const Layout = ({ children }: { children: React.ReactElement }) => {
  useConsoleLog(componentName);

  return <div className="flex flex-col w-full px-4 mx-auto lg:max-w-screen-xl">{children}</div>;
};
export const Head = () => <SEO />;

export default Layout;
