import { getCategoryList } from "@/service/category";

import CategoryList from "./CategoryList";

const CategorySidebar = async ({
  currentCategory,
}: {
  currentCategory?: string;
}) => {
  const categoryList = ["All", ...(await getCategoryList())];

  return (
    <aside className="sticky top-[140px] hidden w-[180px] self-start px-4 py-6 sm:block">
      <CategoryList
        categoryList={categoryList}
        currentCategoryProp={currentCategory}
      />
    </aside>
  );
};

export default CategorySidebar;
