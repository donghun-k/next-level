import PopularPosts from "@/components/home/PopularPosts";
import RecentPosts from "@/components/home/RecentPosts";

const HomePage = () => {
  return (
    <section className="flex flex-col gap-16 px-4 pb-16 pt-6">
      <PopularPosts />
      <RecentPosts />
    </section>
  );
};

export default HomePage;
