import PopularPosts from '@/app/_components/PopularPosts';
import RecentPosts from '@/app/_components/RecentPosts';

const HomePage = () => {
  return (
    <section className="flex max-w-screen-lg flex-col gap-16 px-4 pb-16 pt-6">
      <PopularPosts />
      <RecentPosts />
    </section>
  );
};

export default HomePage;
