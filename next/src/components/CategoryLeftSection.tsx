"use client";

import { ChangeEventHandler, useEffect, useState } from "react";

import usePosts from "@/hooks/usePosts";

import PostListItem from "./PostListItem";

const CategoryLeftSection = ({ category }: { category: string }) => {
  const [page, setPage] = useState(1);
  const { data } = usePosts({ category, page });
  const { posts, totalPosts, totalPages } = data || {
    posts: [],
    totalPosts: 1,
    totalPages: 1,
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  const optionArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrev = () => {
    if (page <= 1) return;
    setPage((prev) => prev - 1);
  };
  const handleNext = () => {
    if (page >= totalPages) return;
    setPage((prev) => prev + 1);
  };
  const handlePageChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const value = Number(e.target.value);
    if (value < 1 || value > totalPages) return;
    setPage(value);
  };

  return (
    <section className="min-h-[calc(100vh_-_280px)] w-[844px] border-r-2 border-r-gray-100 px-4 pb-6">
      <div className="sticky top-[140px] z-50 flex flex-col gap-3 self-start border-b-2 border-gray-50 bg-white bg-opacity-95 py-4">
        <div className="flex items-end gap-4">
          <h3 className="text-2xl font-extrabold text-gray-700">{category}</h3>
          <h5 className="text-lg font-bold text-gray-500">
            {posts &&
              (totalPosts === 1 ? `${totalPosts} post` : `${totalPosts} posts`)}
          </h5>
        </div>
        <input
          className="h-10 w-[400px] rounded-md border-2 border-gray-500 px-2 text-gray-700"
          placeholder="Search"
        />
        <div className="flex items-center gap-2">
          <p className="text-gray-500">Page</p>
          <select
            value={page}
            onChange={handlePageChange}
            className="w-[60px] rounded-md border-2 border-gray-500 px-2 font-bold text-black"
          >
            {optionArray.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <p className="text-gray-500">of</p>
          <p className="text-lg font-bold text-black">{totalPages}</p>
        </div>
      </div>
      <ul className="mb-8 mt-4 flex flex-col gap-6">
        {posts?.map((post) => <PostListItem key={post.id} post={post} />)}
      </ul>
      <div className="flex justify-center gap-8 py-4">
        {page > 1 && (
          <button
            onClick={handlePrev}
            className="rounded-sm bg-gray-50 px-8 py-1 font-bold text-gray-500 shadow-sm duration-300 hover:bg-gray-100 hover:text-gray-700 hover:shadow-md"
          >
            PREV
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={handleNext}
            className="rounded-sm bg-gray-50 px-8 py-1 font-bold text-gray-500 shadow-sm duration-300 hover:bg-gray-100 hover:text-gray-700 hover:shadow-md"
          >
            NEXT
          </button>
        )}
      </div>
    </section>
  );
};

export default CategoryLeftSection;
