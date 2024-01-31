"use client";
import { useParams } from "next/navigation";
import { ChangeEventHandler, useEffect, useState } from "react";

import usePosts from "@/hooks/usePosts";
import useDebounce from "@/hooks/useDebounce";

import PostList from "./PostList";
import PageButton from "./PageButton";
import Pagination from "./Pagination";
import CategoryButton from "./CategoryButton";
import TypingProgress from "./TypingProgress";
import PostsLoadingProgress from "./PostsLoadingProgress";

const PostsSection = ({ categoryList }: { categoryList: string[] }) => {
  const { category } = useParams();
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");
  const { debounced: query, isDebouncing: isTyping } = useDebounce(input, 1000);
  const { data, isLoading } = usePosts({
    category: Array.isArray(category) ? category[0] : category,
    page,
    query,
  });
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

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPage(1);
    setInput(e.target.value);
  };

  return (
    <section className="min-h-[calc(100vh-180px)] border-r-gray-100 px-4 pb-6 sm:min-h-[calc(100vh-280px)] sm:w-[844px] sm:border-r-2">
      <div className="sticky top-[80px] z-50 flex w-screen min-w-[360px] max-w-[432px] flex-col gap-3 self-start border-b-2 border-gray-50 bg-white bg-opacity-95 px-4 py-4 sm:top-[140px] sm:max-w-full">
        <div className="flex justify-between">
          <div className="flex items-end gap-4">
            <h3 className="text-xl font-extrabold text-gray-700 sm:text-2xl">
              {category}
            </h3>
            <h5 className="text-base font-bold text-gray-500 sm:text-lg">
              {!isTyping &&
                !isLoading &&
                posts &&
                (totalPosts === 1
                  ? `${totalPosts} post`
                  : `${totalPosts} posts`)}
            </h5>
          </div>
          <CategoryButton categoryList={categoryList} />
        </div>
        <input
          className="h-10 w-full rounded-md border-2 border-gray-500 px-2 text-sm text-gray-700 sm:w-[400px] sm:text-base"
          placeholder="Search"
          value={input}
          onChange={handleInputChange}
        />
        <div className="flex h-8 items-center gap-2 text-gray-500">
          {isTyping && "Typing..."}
          {isLoading && "Loading..."}
          {!isTyping && !isLoading && totalPages > 0 && (
            <Pagination
              page={page}
              totalPages={totalPages}
              handlePageChange={handlePageChange}
            />
          )}
        </div>
      </div>
      {isTyping && <TypingProgress />}
      {isLoading && <PostsLoadingProgress />}
      {!isLoading && !isTyping && <PostList posts={posts} />}
      {!isLoading && !isTyping && (
        <div className="flex justify-center gap-8 py-4">
          {page > 1 && <PageButton text="PREV" onClick={handlePrev} />}
          {page < totalPages && <PageButton text="NEXT" onClick={handleNext} />}
        </div>
      )}
    </section>
  );
};

export default PostsSection;
