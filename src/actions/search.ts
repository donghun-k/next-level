import { searchPosts } from '@/services/post';

/**
 * 태그와 검색어로 블로그 포스트를 필터링하는 서버 액션
 * @param options - 검색 옵션
 * @param options.tag - 필터링할 태그 (선택사항)
 * @param options.query - 제목에서 검색할 문자열 (선택사항)
 * @returns 필터링된 PostData 배열
 */
export const searchPostsAction = async (options?: {
  tag?: string;
  query?: string;
}) => {
  const posts = searchPosts(options);
  return posts;
};
