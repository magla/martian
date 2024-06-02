import { navigate } from 'gatsby';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const usePrivateRoute = () => {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated && location.pathname !== `/`) {
    navigate('/');
  }
};

export default usePrivateRoute;
