import * as React from 'react';
import useConsoleLog from '../hooks/useConsoleLog';
import Layout from './Layout';

const componentName = 'Footer';

type FooterProps = {
  text?: string;
};

const Footer = ({ text }: FooterProps) => {
  useConsoleLog(componentName);

  return (
    <div className="fixed bottom-0 flex items-center w-full py-4 mt-12 text-white bg-red">
      <Layout>
        <p>{text}</p>
      </Layout>
    </div>
  );
};

export default Footer;
