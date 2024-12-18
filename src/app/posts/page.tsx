'use client';

import { Separator } from '@/components/ui/separator';

import PostFilterSection from './_components/PostFilterSection';
import PostsPagePostList from './_components/PostsPagePostList';
import useQueryStringFilter from './_hooks/useQueryStringFilter';

const PostsPage = () => {
  useQueryStringFilter();
  return (
    <main className="mx-auto min-h-[calc(100vh-196px)] max-w-screen-xl px-8 py-10">
      <PostFilterSection />
      <Separator className="mt-10" />
      <PostsPagePostList />
    </main>
  );
};

export default PostsPage;
