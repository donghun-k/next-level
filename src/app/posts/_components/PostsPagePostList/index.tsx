/* eslint-disable react/no-array-index-key */

'use client';

import { useEffect, useState } from 'react';

import { searchPostsAction } from '@/actions/search';
import type { PostData } from '@/types/post';

import { useSearchQuery } from '../../_hooks/useSearchQuery';
import { useTagFilter } from '../../_hooks/useTagFilter';
import PostsPagePostListItem from './PostsPagePostListItem';
import PostsPagePostListItemSkeleton from './PostsPagePostListItemSkeleton';

const PostsPagePostList = () => {
  const { tagFilter } = useTagFilter();
  const { searchQuery, isTyping } = useSearchQuery();

  const [postDataList, setPostDataList] = useState<PostData[]>([]);

  useEffect(() => {
    (async () => {
      const { posts } = await searchPostsAction({
        tag: tagFilter || undefined,
        query: searchQuery,
      });
      setPostDataList(posts);
    })();
  }, [tagFilter, searchQuery]);

  return (
    <ul className="mt-10 flex flex-col gap-6">
      {isTyping
        ? Array.from({ length: 5 }).map((_, index) => (
            <PostsPagePostListItemSkeleton key={index} />
          ))
        : postDataList.map((postData) => (
            <PostsPagePostListItem key={postData.title} postData={postData} />
          ))}
    </ul>
  );
};

export default PostsPagePostList;
