import { navigate } from 'gatsby';
import useConsoleLog from 'hooks/useConsoleLog';
import * as React from 'react';
import { useCallback } from 'react';
import { logout } from 'services/auth';

const componentName = 'LogoutButton';

const LogoutButton = () => {
  useConsoleLog(componentName);

  const handleButtonClick = useCallback(() => {
    logout(() => navigate('/'));
  }, []);

  return (
    <button
      type="button"
      onClick={handleButtonClick}
      className="text-sm font-bold uppercase hover:text-red"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
