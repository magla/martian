import React from 'react';
import { useConsoleLog } from '../hooks/useConsoleLog';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const componentName = 'SEO';

const SEO = ({ title, description, pathname }: any) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata();

  useConsoleLog(componentName);

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
    </>
  );
};

export default SEO;
