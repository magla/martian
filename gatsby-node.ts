import type { CreatePageArgs } from 'gatsby';

export const onCreatePage = async ({ page, actions }: CreatePageArgs) => {
  const { createPage } = actions;

  if (page.path.match(/^\/app\/post/)) {
    page.matchPath = '/app/post/*';

    createPage(page);
  }
};
