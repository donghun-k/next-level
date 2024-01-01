"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import useCategories from "@/hooks/useCategories";

import CategoryLoadingProgress from "./CategoryLoadingProgress";

const CategorySidebar = ({ currentCategory }: { currentCategory?: string }) => {
  const categoryFromPath = usePathname().replace("/category/", "");
  currentCategory = currentCategory ?? categoryFromPath;
  const { data: categories, isLoading } = useCategories();
  const categoryTitles = [
    "All",
    ...(categories?.map((category) => category.title) ?? []),
  ];
  return (
    <aside className="sticky top-[140px] w-[180px] self-start px-4 py-6">
      {isLoading ? (
        <CategoryLoadingProgress />
      ) : (
        <ul className="flex flex-col gap-4">
          {categoryTitles &&
            categoryTitles.map((category) => (
              <li key={category}>
                <Link
                  href={`/category/${category}`}
                  className={`text-md flex items-center duration-300 ${
                    category === currentCategory
                      ? "font-extrabold text-black [text-shadow:_0_2px_2px_rgb(0_0_0_/_20%)]"
                      : "font-bold text-gray-500"
                  }`}
                >
                  {category}
                </Link>
              </li>
            ))}
        </ul>
      )}
    </aside>
  );
};

export default CategorySidebar;
