'use server';

import { searchPosts } from '@/services/post';

/**
 * 태그와 검색어로 블로그 포스트를 필터링하는 서버 액션
 * @param options - 검색 옵션
 * @param options.tag - 필터링할 태그 (선택사항)
 * @param options.query - 제목에서 검색할 문자열 (선택사항)
 * @param options.page - 현재 페이지 번호 (1부터 시작, 기본값: 1)
 * @param options.pageSize - 페이지당 항목 수 (기본값: 10)
 * @param options.sortBy - 정렬 기준 ('date' | 'title', 기본값: 'date')
 * @param options.sortOrder - 정렬 순서 ('asc' | 'desc', 기본값: 'desc')
 * @returns 필터링된 PostData 배열과 페이지네이션 정보를 포함한 객체
 */
export const searchPostsAction = async (options?: {
  tag?: string;
  query?: string;
  page?: number;
  pageSize?: number;
  sortBy?: 'date' | 'title';
  sortOrder?: 'asc' | 'desc';
}) => {
  'use server';

  const result = searchPosts(options);
  return result;
};
