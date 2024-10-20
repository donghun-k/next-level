import { getPostFilePaths, parsePostFile } from '@/services/post';

import MostRecentPostCard from './_components/MostRecentPostCard';
import PostListItemCard from './_components/PostListItemCard';

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
      <ul className="mt-14 flex flex-wrap gap-x-[20px] gap-y-[30px]">
        {mostRecentPostData &&
          postDataList.map((postData) => (
            <PostListItemCard key={postData.title} postData={postData} />
          ))}
      </ul>
    </main>
  );
};

export default HomePage;
