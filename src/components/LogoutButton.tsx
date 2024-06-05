import * as React from 'react';
import { useCallback } from 'react';
import AuthContext from '../context/AuthContext';
import useConsoleLog from '../hooks/useConsoleLog';
import Button from './Button';

const componentName = 'LogoutButton';

const LogoutButton = () => {
  const { authenticated, setAuthenticated } = React.useContext(AuthContext);

  useConsoleLog(componentName);

  const handleButtonClick = useCallback(() => {
    setAuthenticated && setAuthenticated(!authenticated);
  }, [authenticated]);

  return <Button text="Logout" onClick={handleButtonClick} />;
};

export default LogoutButton;
