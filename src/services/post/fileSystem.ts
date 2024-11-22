import { sync } from 'glob';

import { POSTS_PATH } from '@/constants/path';

import { PostCache } from './cache';

export const getPostFilePaths = () => {
  const cached = PostCache.getPostPaths();
  if (cached) return cached;

  const paths = sync(`${POSTS_PATH}/**/*.mdx`);
  PostCache.setPostPaths(paths);
  return paths;
};
