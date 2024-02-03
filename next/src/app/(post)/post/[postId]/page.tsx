import { Metadata } from "next";
import { notFound } from "next/navigation";

import CategorySidebar from "@/app/(post)/_components/CategorySidebar";
import { getPost } from "@/services/post";

import Banner from "../_components/Banner";
import MarkdownViewer from "../_components/MarkdownViewer";
import CommentSection from "../_components/CommentSection";

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

  const { category, content } = post;
  return (
    <section className="flex w-full flex-col items-center">
      <Banner post={post} />
      <section className="flex max-w-screen-lg">
        <section className="flex min-h-[calc(100vh_-_530px)] w-full min-w-[360px] flex-col gap-16 border-r-2 border-r-gray-100 px-4 py-4 sm:w-[844px] sm:py-6">
          <MarkdownViewer content={content} />
          <CommentSection postId={postId} />
        </section>
        <CategorySidebar currentCategory={category} />
      </section>
    </section>
  );
};

export default PostDetailPage;
