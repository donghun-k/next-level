import { ReactNode } from "react";

import CategorySidebar from "@/components/layout/CategorySidebar";

const CategoryLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex">
      {children}
      <CategorySidebar />
    </section>
  );
};

export default CategoryLayout;
