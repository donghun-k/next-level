import { getPostFilePaths, parsePostFile } from '@/services/post';

import MainPagePostList from './_components/MainPagePostList';
import MostRecentPostCard from './_components/MostRecentPostCard';

const HomePage = () => {
  const paths = getPostFilePaths();

  const postDataList = paths
    .map((path) => {
      return parsePostFile(path);
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  const mostRecentPostData = postDataList.shift();

  return (
    <main className="mx-auto w-full max-w-screen-xl px-[30px] py-[50px]">
      <MostRecentPostCard postData={mostRecentPostData!} />
      <MainPagePostList postDataList={postDataList} />
    </main>
  );
};

export default HomePage;
