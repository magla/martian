import { graphql, PageProps } from 'gatsby';
import * as React from 'react';
import { SEO } from '../components/SEO';
import TextInput, { TextInputType } from '../components/TextInput';

import PasswordInput from '../components/PasswordInput';

const Login = ({ data }: PageProps<Queries.Query>) => {
  const siteTitle = data.site?.siteMetadata?.title || `Title`;

  return (
    <div className="flex flex-col w-full p-8 mx-auto mt-10 bg-white md:max-w-md md:p-10">
      <div className="flex flex-row gap-3 mb-6">
        <div className="animate-bounce">
          <img src="/martian.svg" width="50" alt="Logo" />
        </div>
        <h1 className="my-auto text-3xl font-bold text-black">{siteTitle}</h1>
      </div>
      <form className="flex flex-col">
        <div className="mb-6">
          <TextInput
            label="Email"
            name="email"
            type={TextInputType.email}
            placeholder="your@email.com"
            autoComplete="on"
          />
        </div>
        <div className="mb-6">
          <div className="relative">
            <PasswordInput label="Password" name="password" autoComplete="new-password" />
          </div>
        </div>
        <button
          type="submit"
          className="w-full flex justify-between items-center text-black bg-white relative before:top-0 before:left-0 before:border before:h-full before:w-full before:absolute hover:text-red hover:before:w-[calc(100%-2rem)] before:transition-all before:duration-300 font-bold text-sm px-5 py-2.5 text-left mb-6 uppercase"
        >
          Login
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Login;

export const Head = () => <SEO />;

export const query = graphql`
  query Login {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
