import { Metadata } from "next";
import { notFound } from "next/navigation";

import Banner from "@/components/post/Banner";
import CategorySidebar from "@/components/layout/CategorySidebar";
import CommentSection from "@/components/post/CommentSection";
import MarkdownViewer from "@/components/post/MarkdownViewer";
import { getPost } from "@/service/post";

interface Props {
  params: {
    postId: string;
  };
}

export const generateMetadata = async ({
  params: { postId },
}: Props): Promise<Metadata> => {
  const post = await getPost(postId);

  if (!post) {
    return {
      title: "포스트를 찾을 수 없습니다. ┃ NEXT LEVEL",
      description: "포스트를 찾을 수 없습니다.",
      openGraph: {
        title: "포스트를 찾을 수 없습니다. ┃ NEXT LEVEL",
        description: "포스트를 찾을 수 없습니다.",
      },
    };
  }

  const { title, category } = post;
  return {
    title: `${title} - ${category} ┃ NEXT LEVEL`,
    description: `'${category}' 카테고리의 '${title}' 포스트입니다.`,
    openGraph: {
      title: `${title} - ${category} ┃ NEXT LEVEL`,
      description: `'${category}' 카테고리의 '${title}' 포스트입니다.`,
    },
  };
};

const PostDetailPage = async ({ params: { postId } }: Props) => {
  const post = await getPost(postId);

  if (!post) {
    notFound();
  }

  const { title, category, publishedAt, content } = post;
  return (
    <section className="flex flex-col items-center">
      <Banner
        title={title}
        category={category}
        publishedAt={publishedAt}
        postId={postId}
      />
      <section className="flex">
        <section className="flex min-h-[calc(100vh_-_530px)] w-screen min-w-[360px] flex-col gap-16 border-r-2 border-r-gray-100 px-4 py-4 sm:w-[844px] sm:py-6">
          <MarkdownViewer content={content} />
          <CommentSection postId={postId} />
        </section>
        <CategorySidebar currentCategory={category} />
      </section>
    </section>
  );
};

export default PostDetailPage;
