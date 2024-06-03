import React, { useContext, useEffect, useMemo, useState } from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import Search from '../components/Search';
import SearchContext from '../context/SearchContext';
import useApi, { Endpoints } from '../hooks/useApi';
import useConsoleLog from '../hooks/useConsoleLog';
import usePrivateRoute from '../hooks/usePrivateRoute';
import useSiteMetadata from '../hooks/useSiteMetadata';
import { AppPost, mapPosts } from '../mappers/post';
import { Comment, Post, User } from '../types';

const componentName = 'App';

const App = () => {
  const { title } = useSiteMetadata();
  const [filteredPosts, setFilteredPosts] = useState<(AppPost | undefined)[]>([]);

  const { results } = useContext(SearchContext);

  const apiPosts = useApi<Post[]>(Endpoints.post);
  const apiComments = useApi<Comment[]>(Endpoints.comment);
  const apiUsers = useApi<User[]>(Endpoints.user);
  const posts = useMemo(
    () => mapPosts(apiPosts, apiComments, apiUsers),
    [mapPosts, apiPosts, apiComments, apiUsers],
  );

  usePrivateRoute();
  useConsoleLog(componentName);

  useEffect(() => {
    setFilteredPosts(results as AppPost[]);
  }, [results]);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  return (
    <>
      <Header text={title} showLogout>
        <Search searchData={posts} searchKeys={['user.name', 'user.username']} />
      </Header>
      <Layout>
        <PostList posts={filteredPosts} />
      </Layout>
    </>
  );
};

export default App;
