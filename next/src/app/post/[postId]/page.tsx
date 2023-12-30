import Banner from "@/components/Banner";
import CategorySidebar from "@/components/CategorySidebar";
import CommentSection from "@/components/CommentSection";
import MarkdownViewer from "@/components/MarkdownViewer";
import { getPost } from "@/service/post";

const PostDetailPage = async ({
  params: { postId },
}: {
  params: {
    postId: string;
  };
}) => {
  const post = await getPost(postId);

  const { title, category, publishedAt, body } = post;
  return (
    <section className="flex flex-col items-center">
      <Banner
        title={title}
        category={category}
        publishedAt={publishedAt}
        postId={postId}
      />
      <section className="flex">
        <section className="flex min-h-[calc(100vh_-_530px)] w-[844px] flex-col gap-16 border-r-2 border-r-gray-100 px-4 py-6">
          <MarkdownViewer content={body} />
          <CommentSection postId={postId} />
        </section>
        <CategorySidebar currentCategory={category} />
      </section>
    </section>
  );
};

export default PostDetailPage;
