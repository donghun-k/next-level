import dayjs from 'dayjs';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import { produce } from 'immer';

import { POSTS_PATH } from '@/constants/path';
import type { PostData, PostMetaData } from '@/types/post';

let postPathsCache: string[] | null = null;
let postDataListCache: PostData[] | null = null;
const postCache = new Map<string, PostData>();

const getPostFilePaths = () => {
  if (postPathsCache) {
    return [...postPathsCache];
  }

  postPathsCache = sync(`${POSTS_PATH}/**/*.mdx`);
  return [...postPathsCache];
};

const parsePostFile = (filePath: string) => {
  const file = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(file);

  const metaData = produce({} as PostMetaData, (draft) => {
    Object.assign(draft, {
      id: filePath.split('/').pop()!.replace('.mdx', ''),
      title: data.title,
      date: data.date,
      desc: data.desc,
      tags: [...data.tags],
      thumbnail: data.thumbnail,
    });
  });

  const dateString = dayjs(metaData.date).locale('en').format('MMMM D, YYYY');

  return produce({} as PostData, (draft) => {
    Object.assign(draft, {
      ...metaData,
      date: dateString,
      content,
    });
  });
};

export const getPostDataList = () => {
  if (postDataListCache) {
    return produce(postDataListCache, (draft) => {
      return draft;
    });
  }

  const filePaths = getPostFilePaths();
  const posts = filePaths
    .map((filePath) => parsePostFile(filePath))
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  postDataListCache = produce(posts, (draft) => {
    return draft;
  });

  return [...postDataListCache]; // 새 배열 반환
};

/**
 * 특정 ID의 포스트 데이터를 가져옵니다.
 * @param postId - 찾고자 하는 포스트의 ID (파일명)
 * @returns PostData | null - 포스트를 찾으면 불변 데이터를 반환하고, 없으면 null 반환
 */
export const getPostData = (postId: string): PostData | null => {
  const cachedPost = postCache.get(postId);
  if (cachedPost) {
    return produce(cachedPost, (draft) => {
      return draft;
    });
  }

  const postDataList = getPostDataList();
  const postData = postDataList.find((data) => data.id === postId);

  if (!postData) return null;

  const immutablePost = produce(postData, (draft) => {
    return draft;
  });

  postCache.set(postId, immutablePost);
  return immutablePost;
};
