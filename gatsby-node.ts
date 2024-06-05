import type { CreatePageArgs } from 'gatsby';

export const onCreatePage = async ({ page, actions }: CreatePageArgs) => {
  const { createPage } = actions;

  if (page.path.match(/^\/post/)) {
    page.matchPath = '/post/*';

    createPage(page);
  }
};
