import * as React from 'react';
import useConsoleLog from '../hooks/useConsoleLog';
import Logo from './Logo';
import LogoutButton from './LogoutButton';
import Search from './Search';

const componentName = 'Header';

type HeaderProps = {
  text: string | Queries.Maybe<string>;
  showSearch?: boolean;
  showLogout?: boolean;
};

const Header = ({ text, showSearch = true, showLogout = false }: HeaderProps) => {
  useConsoleLog(componentName);

  return (
    <div className="flex items-center justify-between p-4 pt-12 mb-6 bg-white">
      <a href="/app">
        <div className="flex gap-3">
          <Logo />
          <h1>{text}</h1>
        </div>
      </a>
      {showSearch && <Search />}
      {showLogout && <LogoutButton />}
    </div>
  );
};

export default Header;
