import Logo from 'components/svgs/Logo';
import useConsoleLog from 'hooks/useConsoleLog';
import * as React from 'react';

const componentName = 'LogoTitle';

type LogoTitleProps = {
  text: string | Queries.Maybe<string>;
};

const LogoTitle = ({ text }: LogoTitleProps) => {
  useConsoleLog(componentName);

  return (
    <div className="py-6">
      <button type="button">
        <div className="flex gap-3">
          <Logo />
          <h1>{text}</h1>
        </div>
      </button>
    </div>
  );
};

export default LogoTitle;
