import { getPostFilePaths } from '@/services/post';

const HomePage = () => {
  const paths = getPostFilePaths();
  console.log(paths);
  return (
    <main className="mx-auto w-full max-w-screen-xl px-[30px]">HomePage</main>
  );
};

export default HomePage;
