"use client";
import { useParams } from "next/navigation";
import { ChangeEventHandler, useEffect, useState } from "react";

import usePosts from "@/hooks/usePosts";
import useDebounce from "@/hooks/useDebounce";
import TypingProgress from "@/components/posts/TypingProgress";
import PostsLoadingProgress from "@/components/posts/PostsLoadingProgress";

import PostList from "./PostList";
import PageButton from "./PageButton";
import Pagination from "./Pagination";

const PostsSection = () => {
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
    <section className="min-h-[calc(100vh_-_280px)] w-[844px] border-r-2 border-r-gray-100 px-4 pb-6">
      <div className="sticky top-[140px] z-50 flex flex-col gap-3 self-start border-b-2 border-gray-50 bg-white bg-opacity-95 py-4">
        <div className="flex items-end gap-4">
          <h3 className="text-2xl font-extrabold text-gray-700">{category}</h3>
          <h5 className="text-lg font-bold text-gray-500">
            {!isTyping &&
              !isLoading &&
              posts &&
              (totalPosts === 1 ? `${totalPosts} post` : `${totalPosts} posts`)}
          </h5>
        </div>
        <input
          className="h-10 w-[400px] rounded-md border-2 border-gray-500 px-2 text-gray-700"
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
