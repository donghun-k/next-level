import dayjs from 'dayjs';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';

import type { PostData, PostMetaData } from '@/types/post';

const BASE_PATH = 'public/posts';
const POSTS_PATH = path.join(process.cwd(), ...BASE_PATH.split('/'));

let postPathsCache: string[] | null = null;
let postDataListCache: PostData[] | null = null;
const postCache = new Map<string, PostData>();

const getPostFilePaths = () => {
  if (postPathsCache) return postPathsCache;

  postPathsCache = sync(`${POSTS_PATH}/**/*.mdx`);
  return postPathsCache;
};

const parsePostFile = (filePath: string) => {
  const file = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(file);

  const metaData: PostMetaData = {
    id: filePath.split('/').pop()!.replace('.mdx', ''), // 파일 이름을 ID로 사용
    title: data.title,
    date: data.date,
    desc: data.desc,
    tags: data.tags,
    thumbnail: data.thumbnail,
  };

  const dateString = dayjs(metaData.date).locale('en').format('MMMM D, YYYY');

  return {
    ...metaData,
    date: dateString,
    content,
  };
};

export const getPostDataList = () => {
  if (postDataListCache) return postDataListCache;
  const filePaths = getPostFilePaths();

  const postDataList = filePaths
    .map((filePath) => {
      return parsePostFile(filePath);
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  postDataListCache = postDataList;
  return postDataList;
};

/**
 * 특정 ID의 포스트 데이터를 가져옵니다.
 * @param postId - 찾고자 하는 포스트의 ID (파일명)
 * @returns PostData | null - 포스트를 찾으면 데이터를 반환하고, 없으면 null 반환
 */
export const getPostData = (postId: string): PostData | null => {
  if (postCache.has(postId)) {
    return postCache.get(postId)!;
  }
  const postDataList = getPostDataList();

  const postData = postDataList.find((data) => data.id === postId);

  if (!postData) return null;

  postCache.set(postId, postData);
  return postData;
};
