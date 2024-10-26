'use client';

import type { PostData } from '@/services/post';

import MainPagePostListItem from './MainPagePostListItem';

interface Props {
  postDataList: PostData[];
}

const MainPagePostList = ({ postDataList }: Props) => {
  return (
    <ul className="mt-14 flex flex-wrap gap-x-[20px] gap-y-[30px]">
      {postDataList.map((postData) => (
        <MainPagePostListItem key={postData.title} postData={postData} />
      ))}
    </ul>
  );
};

export default MainPagePostList;
