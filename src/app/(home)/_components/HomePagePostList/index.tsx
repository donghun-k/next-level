'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import type { PostData } from '@/types/post';

import HomePagePostListItem from './HomePagePostListItem';

interface Props {
  postDataList: PostData[];
}

const HomePagePostList = ({ postDataList }: Props) => {
  const [displayedPostDataList, setDisplayedPostDataList] = useState<
    PostData[]
  >(postDataList.slice(0, 6));

  const handleLoadMore = () => {
    if (displayedPostDataList.length === postDataList.length) return;
    setDisplayedPostDataList((prev) => [
      ...prev,
      ...postDataList.slice(prev.length, prev.length + 6),
    ]);
  };
  return (
    <>
      <ul className="mt-10 flex flex-wrap gap-[30px]">
        {displayedPostDataList.map((postData) => (
          <HomePagePostListItem key={postData.title} postData={postData} />
        ))}
      </ul>
      {displayedPostDataList.length < postDataList.length && (
        <div className="flex w-full items-center justify-center pb-[30px] pt-[60px]">
          <Button onClick={handleLoadMore}>Load more</Button>
        </div>
      )}
    </>
  );
};

export default HomePagePostList;
