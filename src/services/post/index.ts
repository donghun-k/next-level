import { produce } from 'immer';

import type { PostData } from '@/types/post';

import { PostCache } from './cache';
import { getPostFilePaths } from './fileSystem';
import { parsePostFile } from './parser';

/**
 * 모든 블로그 포스트의 데이터 목록을 가져옵니다.
 * 캐시된 데이터가 있으면 캐시를 반환하고, 없으면 파일을 읽어 새로운 데이터를 생성합니다.
 * 포스트는 날짜 기준 내림차순으로 정렬됩니다.
 * @returns 불변성이 보장된 PostData 배열
 */
export const getPostDataList = () => {
  const cached = PostCache.getPostDataList();
  if (cached) return cached;

  const filePaths = getPostFilePaths();
  const posts = filePaths
    .map(parsePostFile)
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  const immutablePosts = produce(posts, (draft) => draft);
  PostCache.setPostDataList(immutablePosts);
  return immutablePosts;
};

/**
 * 특정 ID에 해당하는 블로그 포스트의 데이터를 가져옵니다.
 * 캐시된 데이터가 있으면 캐시를 반환하고, 없으면 전체 포스트 목록에서 검색합니다.
 * @param postId - 찾고자 하는 포스트의 ID (파일명)
 * @returns 포스트를 찾으면 불변 데이터를 반환하고, 없으면 null 반환
 */
export const getPostData = (postId: string): PostData | null => {
  const cached = PostCache.getPost(postId);
  if (cached) return produce(cached, (draft) => draft);

  const postData = getPostDataList().find((data) => data.id === postId);
  if (!postData) return null;

  const immutablePost = produce(postData, (draft) => draft);
  PostCache.setPost(postId, immutablePost);
  return immutablePost;
};

/**
 * 모든 블로그 포스트에서 사용된 태그 목록을 가져옵니다.
 * 캐시된 데이터가 있으면 캐시를 반환하고, 없으면 새로운 태그 목록을 생성합니다.
 * 태그는 알파벳 순으로 정렬됩니다.
 * @returns 중복이 제거된 태그 문자열 배열
 */
export const getTagList = (): string[] => {
  const cached = PostCache.getTagList();
  if (cached) return cached;

  const postDataList = getPostDataList();
  const uniqueTags = new Set<string>();
  postDataList.forEach((post) =>
    post.tags.forEach((tag) => uniqueTags.add(tag))
  );

  const tags = Array.from(uniqueTags).sort((a, b) => a.localeCompare(b));
  PostCache.setTagList(tags);
  return tags;
};

/**
 * 태그와 검색어로 블로그 포스트를 필터링합니다.
 * @param options - 검색 옵션
 * @param options.tag - 필터링할 태그 (선택사항)
 * @param options.query - 제목에서 검색할 문자열 (선택사항)
 * @returns 필터링된 PostData 배열
 *
 * @example
 * // javascript 태그가 있는 모든 포스트 가져오기
 * const taggedPosts = searchPosts({ tag: 'javascript' });
 *
 * // 제목에 'react'가 포함된 포스트 검색
 * const searchedPosts = searchPosts({ query: 'react' });
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
