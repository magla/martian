import * as React from 'react';

import { useConsoleLog } from '../hooks/useConsoleLog';

const componentName = 'Header';

type HeaderProps = {
  text: string | Queries.Maybe<string>;
};

const Header = ({ text }: HeaderProps) => {
  useConsoleLog(componentName);

  return (
    <div className="flex flex-row gap-3 mb-6">
      <img src="/martian.svg" width="50" alt="Logo" />
      <h1 className="my-auto text-3xl font-bold text-black">{text}</h1>
    </div>
  );
};

export default Header;
