import { WindowLocation } from '@reach/router';
import AuthContext from 'contexts/AuthContext';
import { navigate } from 'gatsby';
import { useContext } from 'react';

const usePrivateRoute = (location: WindowLocation<unknown>) => {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated && location.pathname !== `/`) {
    navigate('/');
  }
};

export default usePrivateRoute;
