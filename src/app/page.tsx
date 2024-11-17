import { Separator } from '@/components/ui/separator';
import { getPostDataList } from '@/services/post';

import MainPagePostList from './_components/MainPagePostList';
import MostRecentPostCard from './_components/MostRecentPostCard';

const HomePage = () => {
  const postDataList = getPostDataList();

  const mostRecentPostData = postDataList.shift();

  return (
    <main className="mx-auto w-full max-w-screen-xl px-8 py-10">
      <MostRecentPostCard postData={mostRecentPostData!} />
      <Separator className="mt-10" />
      <MainPagePostList postDataList={postDataList} />
    </main>
  );
};

export default HomePage;
