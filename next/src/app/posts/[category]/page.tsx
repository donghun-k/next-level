"use client";
import { usePathname } from "next/navigation";

import CategorySidebar from "@/components/CategorySidebar";

const PostsPage = () => {
  const category = usePathname().replace("/posts/", "");
  return (
    <section className="flex">
      <section className="min-h-[calc(100vh_-_240px)] w-full border-r-2 border-r-gray-100">
        {category}
      </section>
      <CategorySidebar currentCategory={category} />
    </section>
  );
};

export default PostsPage;
