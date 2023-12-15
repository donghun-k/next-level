"use client";

import { useParams } from "next/navigation";

import Banner from "@/components/Banner";
import CategorySidebar from "@/components/CategorySidebar";
import PostLeftSection from "@/components/PostLeftSection";
import usePost from "@/hooks/usePost";

const PostDetailPage = () => {
  const { postId } = useParams();
  const { data: post } = usePost(postId as string);

  if (!post) return null;

  const { title, category, publishedAt, body } = post;
  return (
    <section className="flex flex-col items-center">
      <Banner title={title} category={category} publishedAt={publishedAt} />
      <section className="flex">
        <PostLeftSection content={body} />
        <CategorySidebar />
      </section>
    </section>
  );
};

export default PostDetailPage;
