import { ReactNode } from "react";

import CategorySidebar from "@/app/(post)/_components/CategorySidebar";

const CategoryLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex">
      {children}
      <CategorySidebar />
    </section>
  );
};

export default CategoryLayout;
