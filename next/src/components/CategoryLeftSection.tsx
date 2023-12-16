"use client";

import usePosts from "@/hooks/usePosts";

import PostListItem from "./PostListItem";

const CategoryLeftSection = ({ category }: { category: string }) => {
  const { data: posts } = usePosts(category);
  return (
    <section className="min-h-[calc(100vh_-_280px)] w-[844px] border-r-2 border-r-gray-100 px-4 pb-6">
      <div className="sticky top-[140px] z-50 flex flex-col gap-3 self-start border-b-2 border-gray-50 bg-white bg-opacity-95 py-4">
        <h3 className="text-2xl font-extrabold text-gray-700">{category}</h3>
        <input
          className="h-10 w-[500px] rounded-md border-2 border-gray-500 px-2 text-gray-700"
          placeholder="Search"
        />
        <h5 className="text-lg font-bold text-gray-700">
          {posts &&
            (posts.length > 1
              ? `${posts.length} posts`
              : `${posts.length} post`)}
        </h5>
      </div>
      <ul className="mb-8 mt-4 flex flex-col gap-6">
        {posts?.map((post) => <PostListItem key={post.id} post={post} />)}
      </ul>
    </section>
  );
};

export default CategoryLeftSection;
