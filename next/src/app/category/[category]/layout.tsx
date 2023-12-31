import { ReactNode } from "react";
import { Metadata } from "next";

import CategorySidebar from "@/components/CategorySidebar";

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

const CategoryLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex">
      {children}
      <CategorySidebar />
    </section>
  );
};

export default CategoryLayout;
