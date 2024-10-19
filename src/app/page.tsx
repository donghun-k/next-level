import { getPostFilePaths, parsePostFile } from '@/services/post';

import MostRecentPostCard from './_components/MostRecentPostCard';

const HomePage = () => {
  const paths = getPostFilePaths();

  const postDataList = paths
    .map((path) => {
      return parsePostFile(path);
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return (
    <main className="mx-auto w-full max-w-screen-xl px-[30px] py-[50px]">
      <MostRecentPostCard postData={postDataList[0]} />
    </main>
  );
};

export default HomePage;
