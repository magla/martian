import * as React from 'react';
import useConsoleLog from '../hooks/useConsoleLog';
import Layout from './Layout';
import LogoTitle from './LogoTitle';
import LogoutButton from './LogoutButton';

const componentName = 'Header';

type HeaderProps = {
  text: string | Queries.Maybe<string>;
  showLogout?: boolean;
  children: React.ReactElement;
};

const Header = ({ text, showLogout = false, children }: HeaderProps) => {
  useConsoleLog(componentName);

  return (
    <Layout>
      <div className="flex items-center justify-between my-6 bg-white">
        <LogoTitle text={text} />
        {children}
        {showLogout && <LogoutButton />}
      </div>
    </Layout>
  );
};

export default Header;
