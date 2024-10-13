import { sync } from 'glob';
import path from 'path';

const BASE_PATH = 'public/posts';
const POSTS_PATH = path.join(process.cwd(), ...BASE_PATH.split('/'));

/**
 * 포스트 폴더 내의 모든 MDX 파일 경로를 가져옵니다.
 */
export const getPostFilePaths = () => {
  const paths: string[] = sync(`${POSTS_PATH}/**/*.mdx`);
  return paths;
};
