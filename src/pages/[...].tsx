import { Router } from '@reach/router';
import PrivateRoute from 'components/auth/PrivateRoute';
import Posts from 'components/posts/Posts';
import SinglePost from 'components/posts/SinglePost';
import { PageProps } from 'gatsby';
import React from 'react';
import Login from './Login';

const App = (props: PageProps) => {
  return (
    <Router>
      <PrivateRoute {...props} Component={Posts} path="/app" />
      <PrivateRoute {...props} Component={SinglePost} path="/app/post/:id" />
      <Login {...props} path="/" />
    </Router>
  );
};

export default App;
