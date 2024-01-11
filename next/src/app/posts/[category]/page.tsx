import { Metadata } from "next";

import PostsSection from "@/components/posts/PostsSection";

export const generateMetadata = async ({
  params: { category },
}: {
  params: { category: string };
}): Promise<Metadata> => {
  return {
    title: `Posts in '${category}' ┃ NEXT LEVEL`,
    description: `${category} 카테고리의 포스트 목록입니다.`,
    openGraph: {
      title: `Posts in '${category}' ┃ NEXT LEVEL`,
      description: `${category} 카테고리의 포스트 목록입니다.`,
    },
  };
};

const PostsPage = () => {
  return <PostsSection />;
};

export default PostsPage;
