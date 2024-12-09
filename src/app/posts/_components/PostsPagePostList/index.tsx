/* eslint-disable react/no-array-index-key */

'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import { searchPostsAction } from '@/actions/search';
import PaginationBar from '@/components/common/PaginationBar';
import type { PostData } from '@/types/post';

import { useSearchQuery } from '../../_hooks/useSearchQuery';
import { useTagFilter } from '../../_hooks/useTagFilter';
import PostsPagePostListItem from './PostsPagePostListItem';
import PostsPagePostListItemSkeleton from './PostsPagePostListItemSkeleton';

const ITEMS_PER_PAGE = 5;

const PostsPagePostList = () => {
  const { tagFilter } = useTagFilter();
  const { searchQuery, isTyping } = useSearchQuery();

  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [postDataList, setPostDataList] = useState<PostData[]>([]);
  const [resultCount, setResultCount] = useState(0);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isError) return;
    setIsLoading(true);
    (async () => {
      try {
        const { posts, totalItems, totalPages } = await searchPostsAction({
          tag: tagFilter || undefined,
          query: searchQuery,
          page,
          pageSize: ITEMS_PER_PAGE,
        });
        setResultCount(totalItems);
        setLastPage(totalPages);
        setPostDataList(posts);
      } catch (error) {
        setIsError(true);
        toast.error('Failed to fetch posts');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [tagFilter, searchQuery, page]);

  if (isError) {
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
      <p className="mt-4 text-xl">
        {isTyping && 'Typing...'}
        {isLoading && 'Loading...'}
        {!isTyping &&
          !isLoading &&
          `Found ${resultCount} result${resultCount !== 1 ? 's' : ''}`}
      </p>
      <ul className="mt-4 flex flex-col gap-6">
        {isTyping || isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <PostsPagePostListItemSkeleton key={index} />
            ))
          : postDataList.map((postData) => (
              <PostsPagePostListItem key={postData.title} postData={postData} />
            ))}
      </ul>
      <PaginationBar
        lastPage={lastPage}
        currentPage={page}
        onChange={setPage}
        className="mt-8"
      />
    </>
  );
};

export default PostsPagePostList;
