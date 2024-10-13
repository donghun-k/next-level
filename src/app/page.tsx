import { getPostFilePaths, parsePostFile } from '@/services/post';

const HomePage = () => {
  const paths = getPostFilePaths();
  const postData = parsePostFile(paths[0]);
  console.log('postData: ', postData);
  return (
    <main className="mx-auto w-full max-w-screen-xl px-[30px]">HomePage</main>
  );
};

export default HomePage;
