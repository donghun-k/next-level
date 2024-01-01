import PopularPostGrid from "@/components/PopularPostGrid";
import RecentPostList from "@/components/RecentPostList";

const HomePage = () => {
  return (
    <section className="flex flex-col gap-16 px-4 pb-16 pt-6">
      <PopularPostGrid />
      <RecentPostList />
    </section>
  );
};

export default HomePage;
