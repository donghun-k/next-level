/* eslint-disable react/no-array-index-key */

'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import PaginationBar from '@/components/common/PaginationBar';

import { usePostsQuery } from '../../_hooks/usePostsQuery';
import { useSearchQuery } from '../../_hooks/useSearchQuery';
import { useTagFilter } from '../../_hooks/useTagFilter';
import PostsPagePostListItem from './PostsPagePostListItem';
import PostsPagePostListItemSkeleton from './PostsPagePostListItemSkeleton';

const ITEMS_PER_PAGE = 5;

const PostsPagePostList = () => {
  const { tagFilter } = useTagFilter();
  const { searchQuery, isTyping } = useSearchQuery();
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = usePostsQuery({
    tag: tagFilter || undefined,
    query: searchQuery,
    page,
    pageSize: ITEMS_PER_PAGE,
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [page]);

  if (isError) {
    toast.error('Failed to fetch posts');
    return (
      <div className="mt-4 flex h-24 w-full items-center justify-center text-center text-2xl">
        Something went wrong.
        <br />
        Please try again later.
      </div>
    );
  }

  return (
    <>
      <p className="ml-4 mt-4 text-xl text-muted-foreground max-md:text-base">
        {isTyping && 'Typing...'}
        {isLoading && 'Loading...'}
        {!isTyping &&
          !isLoading &&
          `Found ${data?.totalItems ?? 0} result${
            data?.totalItems !== 1 ? 's' : ''
          } (Showing ${((data?.currentPage ?? 1) - 1) * ITEMS_PER_PAGE + 1}-${Math.min(
            ((data?.currentPage ?? 1) - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
            data?.totalItems ?? 0
          )} of ${data?.totalItems ?? 0})`}
      </p>
      <ul className="mt-4 flex flex-col gap-6">
        {isTyping || isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <PostsPagePostListItemSkeleton key={index} />
            ))
          : data?.posts.map((postData) => (
              <PostsPagePostListItem key={postData.title} postData={postData} />
            ))}
      </ul>
      <PaginationBar
        lastPage={data?.totalPages ?? 1}
        currentPage={page}
        onChange={setPage}
        className="mt-8"
      />
    </>
  );
};

export default PostsPagePostList;
