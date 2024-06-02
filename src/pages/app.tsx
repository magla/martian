import React from 'react';
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import useConsoleLog from '../hooks/useConsoleLog';
import usePrivateRoute from '../hooks/usePrivateRoute';

const componentName = 'App';

const App = () => {
  usePrivateRoute();
  useConsoleLog(componentName);

  return (
    <Layout showLogout>
      <PostList />
    </Layout>
  );
};

export default App;
