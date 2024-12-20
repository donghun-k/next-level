import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import { produce } from 'immer';

import type { PostData, PostMetaData } from '@/types/post';

export const parsePostFile = (filePath: string): PostData => {
  const file = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(file);

  const metaData = produce({} as PostMetaData, (draft) => {
    Object.assign(draft, {
      id: data.id,
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
