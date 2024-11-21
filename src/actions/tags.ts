'use server';

import { getTagList } from '@/services/post';

export const getTagListAction = async () => {
  const tagList = getTagList();
  return tagList;
};
