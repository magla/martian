import SearchInput from 'components/inputs/SearchInput';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import Layout from 'components/layout/Layout';
import SEO from 'components/layout/SEO';
import PostList from 'components/posts/PostList';
import SearchContext from 'contexts/SearchContext';
import { PageProps } from 'gatsby';
import useApi, { Endpoints, fetchFromAPI } from 'hooks/useApi';
import useConsoleLog from 'hooks/useConsoleLog';
import usePrivateRoute from 'hooks/usePrivateRoute';
import useSiteMetadata from 'hooks/useSiteMetadata';
import { mapPosts } from 'mappers/post';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { AppPost, Comment, Post, User } from '../types';

const componentName = 'App';

const App = ({ location, serverData }: PageProps) => {
  usePrivateRoute(location);
  useConsoleLog(componentName);

  const { title } = useSiteMetadata();
  const [filteredPosts, setFilteredPosts] = useState<(AppPost | undefined)[]>([]);

  const { results } = useContext(SearchContext);

  const apiPosts = (serverData as any)?.posts || useApi<Post[]>(Endpoints.post);
  const apiComments = (serverData as any)?.comments || useApi<Comment[]>(Endpoints.comment);
  const apiUsers = (serverData as any)?.users || useApi<User[]>(Endpoints.user);
  const posts = useMemo(
    () => mapPosts(apiPosts, apiComments, apiUsers),
    [mapPosts, apiPosts, apiComments, apiUsers],
  );

  useEffect(() => {
    setFilteredPosts(results as AppPost[]);
  }, [results]);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  return (
    <div>
      <div className="mb-40">
        <Header text={`${title} Blog`} showLogout>
          <SearchInput searchData={posts} searchKeys={['user.name', 'user.username']} />
        </Header>
        <Layout>
          <PostList posts={filteredPosts} />
        </Layout>
      </div>
      <Footer />
    </div>
  );
};

export const Head = () => <SEO title="Martian Blog" />;

export async function getServerData() {
  const postsUrl = `${process.env.GATSBY_API_URL}/${Endpoints.post}`;
  const commentsUrl = `${process.env.GATSBY_API_URL}/${Endpoints.comment}`;
  const usersUrl = `${process.env.GATSBY_API_URL}/${Endpoints.user}`;

  try {
    const posts = await fetchFromAPI<Post[]>(postsUrl);
    const comments = await fetchFromAPI<Comment[]>(commentsUrl);
    const users = await fetchFromAPI<User[]>(usersUrl);

    return {
      status: 200,
      props: { posts, comments, users },
    };
  } catch (e: any) {
    return {
      status: 500,
      props: {},
    };
  }
}
export default App;
