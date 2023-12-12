import Banner from "@/components/Banner";
import CategorySidebar from "@/components/CategorySidebar";
import PostLeftSection from "@/components/PostLeftSection";

const PostDetailPage = () => {
  return (
    <section className="flex flex-col items-center">
      <Banner />
      <section className="flex">
        <PostLeftSection />
        <CategorySidebar />
      </section>
    </section>
  );
};

export default PostDetailPage;
