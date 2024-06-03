import * as React from 'react';
import useConsoleLog from '../hooks/useConsoleLog';
import Logo from './Logo';

const componentName = 'LogoTitle';

type LogoTitleProps = {
  text: string | Queries.Maybe<string>;
};

const LogoTitle = ({ text }: LogoTitleProps) => {
  useConsoleLog(componentName);

  return (
    <div className="py-6">
      <a href="/app">
        <div className="flex gap-3">
          <Logo />
          <h1>{text}</h1>
        </div>
      </a>
    </div>
  );
};

export default LogoTitle;
