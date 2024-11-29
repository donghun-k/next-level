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
 * 태그와 검색어로 블로그 포스트를 필터링하고 페이지네이션과 정렬을 적용합니다.
 * @param options - 검색 옵션
 * @param options.tag - 필터링할 태그 (선택사항)
 * @param options.query - 제목에서 검색할 문자열 (선택사항)
 * @param options.page - 현재 페이지 번호 (1부터 시작, 기본값: 1)
 * @param options.pageSize - 페이지당 항목 수 (기본값: 10)
 * @param options.sortBy - 정렬 기준 ('date' | 'title', 기본값: 'date')
 * @param options.sortOrder - 정렬 순서 ('asc' | 'desc', 기본값: 'desc')
 * @returns 필터링된 PostData 배열과 페이지네이션 정보를 포함한 객체
 *
 * @example
 * // javascript 태그가 있는 포스트를 날짜 내림차순으로 첫 페이지 가져오기
 * const result = searchPosts({
 *   tag: 'javascript',
 *   page: 1,
 *   pageSize: 10,
 *   sortBy: 'date',
 *   sortOrder: 'desc'
 * });
 *
 * // 제목에 'react'가 포함된 포스트를 제목 오름차순으로 정렬하여 가져오기
 * const result = searchPosts({
 *   query: 'react',
 *   sortBy: 'title',
 *   sortOrder: 'asc'
 * });
 */
export const searchPosts = (options?: {
  tag?: string;
  query?: string;
  page?: number;
  pageSize?: number;
  sortBy?: 'date' | 'title';
  sortOrder?: 'asc' | 'desc';
}): {
  posts: PostData[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
} => {
  const {
    page = 1,
    pageSize = 5,
    sortBy = 'date',
    sortOrder = 'desc',
  } = options || {};

  const postDataList = getPostDataList();
  
  let filteredPosts = postDataList;

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
  
  filteredPosts = produce(filteredPosts, (draft) => {
    draft.sort((a, b) => {
      const compareValue =
        sortBy === 'date'
          ? new Date(a.date).getTime() - new Date(b.date).getTime()
          : a.title.localeCompare(b.title);

      return sortOrder === 'asc' ? compareValue : -compareValue;
    });
  });

  const totalItems = filteredPosts.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const normalizedPage = Math.max(1, Math.min(page, totalPages));
  const startIndex = (normalizedPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);

  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  return {
    posts: paginatedPosts,
    totalItems,
    totalPages,
    currentPage: normalizedPage,
  };
};
