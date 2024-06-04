import useConsoleLog from 'hooks/useConsoleLog';
import useSiteMetadata from 'hooks/useSiteMetadata';
import React from 'react';

const componentName = 'SEO';

const SEO = ({ title, description }: any) => {
  const { title: defaultTitle, description: defaultDescription } = useSiteMetadata();

  useConsoleLog(componentName);

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
    </>
  );
};

export default SEO;
