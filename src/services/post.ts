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
let tagListCache: string[] | null = null;

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

export const getTagList = (): string[] => {
  if (!tagListCache) {
    const postDataList = getPostDataList();
    const uniqueTags = new Set<string>();

    postDataList.forEach((post) => {
      post.tags.forEach((tag) => uniqueTags.add(tag));
    });

    tagListCache = Array.from(uniqueTags).sort((a, b) => a.localeCompare(b));
  }

  return [...tagListCache];
};

/**
 * 태그와 검색어로 블로그 포스트를 필터링하는 함수
 * @param options - 검색 옵션 객체
 * @param options.tag - 필터링할 태그 (선택사항)
 * @param options.query - 제목과 설명에서 검색할 문자열 (선택사항)
 * @returns 필터링된 PostData 객체 배열
 *
 * @example
 * // javascript 태그가 있는 모든 포스트 가져오기
 * const taggedPosts = searchPosts({ tag: 'javascript' });
 *
 * // 제목에 'react'가 포함된 포스트 검색
 * const searchedPosts = searchPosts({ query: 'react' });
 *
 * // javascript 태그가 있으면서 react 관련 포스트 검색
 * const filteredPosts = searchPosts({ tag: 'javascript', query: 'react' });
 */
export const searchPosts = (options?: {
  tag?: string;
  query?: string;
}): PostData[] => {
  const postDataList = getPostDataList();

  return produce(postDataList, (draft) => {
    let filteredPosts = draft;

    if (options?.tag) {
      filteredPosts = filteredPosts.filter((post) =>
        post.tags.includes(options.tag!)
      );
    }

    if (options?.query) {
      filteredPosts = filteredPosts.filter((post) =>
        post.title.toLowerCase().includes(options.query!.toLowerCase())
      );
    }

    return filteredPosts;
  });
};
