import dayjs from 'dayjs';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
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

export interface PostMetaData {
  id: string;
  title: string;
  date: string;
  desc: string;
  tags: string[];
  thumbnail: string;
}

export interface PostData extends PostMetaData {
  content: string;
}

export const parsePostFile = (filePath: string) => {
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
  const filePaths = getPostFilePaths();

  const postDataList = filePaths
    .map((filePath) => {
      return parsePostFile(filePath);
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return postDataList;
};

/**
 * 특정 ID의 포스트 데이터를 가져옵니다.
 * @param postId - 찾고자 하는 포스트의 ID (파일명)
 * @returns PostData | null - 포스트를 찾으면 데이터를 반환하고, 없으면 null 반환
 */
export const getPostData = (postId: string): PostData | null => {
  const filePaths = getPostFilePaths();
  const targetPath = filePaths.find((filePath) => {
    const fileName = filePath.split('/').pop()!.replace('.mdx', '');
    return fileName === postId;
  });

  if (!targetPath) {
    return null;
  }

  return parsePostFile(targetPath);
};
