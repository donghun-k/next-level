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
