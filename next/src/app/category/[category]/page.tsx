"use client";
import { usePathname } from "next/navigation";

import CategorySidebar from "@/components/CategorySidebar";
import CategoryLeftSection from "@/components/CategoryLeftSection";

const PostsPage = () => {
  const category = usePathname().replace("/category/", "");
  return (
    <section className="flex">
      <CategoryLeftSection category={category} />
      <CategorySidebar currentCategory={category} />
    </section>
  );
};

export default PostsPage;
