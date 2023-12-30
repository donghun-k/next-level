import Banner from "@/components/Banner";
import CategorySidebar from "@/components/CategorySidebar";
import PostLeftSection from "@/components/PostLeftSection";
import { getPost } from "@/service/post";

const PostDetailPage = async ({
  params: { postId },
}: {
  params: {
    postId: string;
  };
}) => {
  const post = await getPost(postId);

  const { title, category, publishedAt, body, views } = post;
  return (
    <section className="flex flex-col items-center">
      <Banner
        title={title}
        category={category}
        publishedAt={publishedAt}
        views={views}
      />
      <section className="flex">
        <PostLeftSection content={body} />
        <CategorySidebar currentCategory={category} />
      </section>
    </section>
  );
};

export default PostDetailPage;
