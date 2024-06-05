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
import useSiteMetadata from 'hooks/useSiteMetadata';
import { mapPosts } from 'mappers/post';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { AppPost, Comment, Post, User } from '../../types';

const componentName = 'Posts';

type DataTypes = {
  posts: Post[];
  comments: Comment[];
  users: User[];
};

const Posts = ({ serverData }: PageProps) => {
  useConsoleLog(componentName);

  const { title } = useSiteMetadata();
  const [filteredPosts, setFilteredPosts] = useState<(AppPost | undefined)[]>([]);

  const { results } = useContext(SearchContext);

  const { result: apiPosts, loading: postsLoading } = useApi<Post[]>(
    Endpoints.post,
    !!(serverData as DataTypes)?.posts,
  );
  const { result: apiComments, loading: commentsLoading } = useApi<Comment[]>(
    Endpoints.comment,
    !!(serverData as DataTypes)?.comments,
  );
  const { result: apiUsers, loading: usersLoading } = useApi<User[]>(
    Endpoints.user,
    !!(serverData as DataTypes)?.users,
  );

  const posts = useMemo(
    () => mapPosts(apiPosts, apiComments, apiUsers),
    [mapPosts, apiPosts, apiComments, apiUsers],
  );
  const loading = useMemo(
    () => postsLoading || commentsLoading || usersLoading,
    [postsLoading, commentsLoading, usersLoading],
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
          <PostList posts={filteredPosts} loading={loading} />
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
export default Posts;
