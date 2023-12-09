import PopularPostGrid from "@/components/PopularPostGrid";

const HomePage = () => {
  return (
    <section className="flex flex-col gap-3 py-6">
      <h2 className="text-2xl font-extrabold text-gray-700">Popular</h2>
      <PopularPostGrid />
      <h2 className="text-2xl font-extrabold text-gray-700">Recent</h2>
    </section>
  );
};

export default HomePage;
