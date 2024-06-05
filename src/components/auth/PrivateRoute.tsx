import { PageProps, navigate } from 'gatsby';
import React from 'react';
import { isLoggedIn } from 'services/auth';

const PrivateRoute = ({ Component, location, ...rest }: PageProps & { Component: any }) => {
  if (!isLoggedIn() && location.pathname !== `/`) {
    navigate('/');

    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
