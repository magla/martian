import AuthContext from 'contexts/AuthContext';
import useConsoleLog from 'hooks/useConsoleLog';
import * as React from 'react';
import { useCallback } from 'react';

const componentName = 'LogoutButton';

const LogoutButton = () => {
  const { authenticated, setAuthenticated } = React.useContext(AuthContext);

  useConsoleLog(componentName);

  const handleButtonClick = useCallback(() => {
    setAuthenticated && setAuthenticated(!authenticated);
  }, [authenticated]);

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
