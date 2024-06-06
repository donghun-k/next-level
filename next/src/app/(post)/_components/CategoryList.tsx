'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

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
                  ? 'drop-shadow-custom font-extrabold text-black'
                  : 'font-bold text-gray-500'
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
