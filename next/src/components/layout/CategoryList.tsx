"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

interface Props {
  categoryList: string[];
  currentCategoryProp?: string;
}

const CategoryList = ({ categoryList, currentCategoryProp }: Props) => {
  const { category: currentCategoryParam } = useParams();
  const currentCategory =
    currentCategoryProp ??
    (Array.isArray(currentCategoryParam)
      ? currentCategoryParam[0]
      : currentCategoryParam);

  return (
    <ul className="flex flex-col gap-4">
      {categoryList &&
        categoryList.map((category) => (
          <li key={category}>
            <Link
              href={`/posts/${category}`}
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
  );
};

export default CategoryList;
