import GithubSlugger from 'github-slugger';

import type { TocItem } from '../_types/toc';

export const extractToc = (content: string): TocItem[] => {
  const headingRegex = /^#{1,6}\s+(.+)$/gm;
  const toc: TocItem[] = [];
  const matches = content.match(headingRegex) || [];
  const slugger = new GithubSlugger();

  for (const match of matches) {
    const headerText = match.replace(/^#+\s+/, '');
    const level = match.split('#').length - 1;
    const id = slugger.slug(headerText);

    toc.push({
      id,
      text: headerText,
      level,
    });
  }

  return toc;
};
