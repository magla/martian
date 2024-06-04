import AuthContext from 'contexts/AuthContext';
import { navigate } from 'gatsby';
import { useContext } from 'react';

const usePrivateRoute = () => {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated && location.pathname !== `/`) {
    navigate('/');
  }
};

export default usePrivateRoute;
