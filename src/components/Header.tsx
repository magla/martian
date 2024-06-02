import * as React from 'react';
import useConsoleLog from '../hooks/useConsoleLog';
import Logo from './Logo';
import LogoutButton from './LogoutButton';

const componentName = 'Header';

type HeaderProps = {
  text: string | Queries.Maybe<string>;
  showLogout?: boolean;
};

const Header = ({ text, showLogout = false }: HeaderProps) => {
  useConsoleLog(componentName);

  return (
    <div className="flex justify-between p-4 pt-12 mb-6 bg-white">
      <a href="/app">
        <div className="flex gap-3">
          <Logo />
          <h1>{text}</h1>
        </div>
      </a>
      {showLogout && <LogoutButton />}
    </div>
  );
};

export default Header;
