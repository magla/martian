import SearchInput from 'components/inputs/SearchInput';
import Header from 'components/layout/Header';
import Layout from 'components/layout/Layout';
import SEO from 'components/layout/SEO';
import PostList from 'components/posts/PostList';
import SearchContext from 'contexts/SearchContext';
import useApi, { Endpoints } from 'hooks/useApi';
import useConsoleLog from 'hooks/useConsoleLog';
import usePrivateRoute from 'hooks/usePrivateRoute';
import useSiteMetadata from 'hooks/useSiteMetadata';
import { mapPosts } from 'mappers/post';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { AppPost, Comment, Post, User } from '../types';

const componentName = 'App';

const App = () => {
  useConsoleLog(componentName);

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

  useEffect(() => {
    setFilteredPosts(results as AppPost[]);
  }, [results]);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  return (
    <div className="mb-40">
      <Header text={`${title} Blog`} showLogout>
        <SearchInput searchData={posts} searchKeys={['user.name', 'user.username']} />
      </Header>
      <Layout>
        <PostList posts={filteredPosts} />
      </Layout>
    </div>
  );
};

export const Head = () => <SEO title="Martian Blog" />;

export default App;
