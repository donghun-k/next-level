/* eslint-disable react/no-array-index-key */

'use client';

import { useEffect, useState } from 'react';

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

  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [postDataList, setPostDataList] = useState<PostData[]>([]);
  const [resultCount, setResultCount] = useState(0);

  useEffect(() => {
    (async () => {
      const { posts, totalItems, totalPages } = await searchPostsAction({
        tag: tagFilter || undefined,
        query: searchQuery,
        page,
        pageSize: ITEMS_PER_PAGE,
      });
      setResultCount(totalItems);
      setLastPage(totalPages);
      setPostDataList(posts);
    })();
  }, [tagFilter, searchQuery, page]);

  return (
    <>
      <p className="mt-4 text-xl">
        {resultCount} result{resultCount !== 1 ? 's' : ''}
      </p>
      <ul className="mt-4 flex flex-col gap-6">
        {isTyping
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
