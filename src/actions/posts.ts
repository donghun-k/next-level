'use server';

import { getPostDataList } from '@/services/post';

export const getPostDataListAction = async () => {
  const postDataList = getPostDataList();
  return postDataList;
};
