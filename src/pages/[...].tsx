import { Router } from '@reach/router';
import PrivateRoute from 'components/auth/PrivateRoute';
import SEO from 'components/layout/SEO';
import Posts from 'components/posts/Posts';
import SinglePost from 'components/posts/SinglePost';
import { PageProps } from 'gatsby';
import React from 'react';
import NotFoundPage from './404';

const App = (props: PageProps) => {
  return (
    <Router>
      <PrivateRoute {...props} Component={Posts} path="/app" />
      <PrivateRoute {...props} Component={SinglePost} path="/post/:id" />
      <NotFoundPage default />
    </Router>
  );
};

export const Head = () => <SEO title="Martian Blog" />;

export default App;
