import PopularPostGrid from "@/components/PopularPostGrid";
import RecentPostList from "@/components/RecentPostList";

const HomePage = () => {
  return (
    <section className="flex flex-col gap-16 pb-16 pt-6">
      <section>
        <h2 className="mb-6 text-2xl font-extrabold text-gray-700">Popular</h2>
        <PopularPostGrid />
      </section>
      <section>
        <h2 className="mb-6 text-2xl font-extrabold text-gray-700">Recent</h2>
        <RecentPostList />
      </section>
    </section>
  );
};

export default HomePage;
