import * as React from 'react';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import SEO from '../components/SEO';
import { MartianProvider } from '../context/MarianContext';
import { useSiteMetadata } from '../hooks';

const App = () => {
  const { title } = useSiteMetadata();

  return (
    <MartianProvider>
      <div className="flex flex-col w-full p-8 mx-auto bg-white md:p-10 md:max-w-md">
        <Header text={title} />
        <LoginForm />
      </div>
    </MartianProvider>
  );
};
export const Head = () => <SEO />;

export default App;
