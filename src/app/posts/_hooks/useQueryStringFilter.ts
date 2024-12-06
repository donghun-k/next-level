'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { useTagFilter } from './useTagFilter';

const useQueryStringFilter = () => {
  const searchParams = useSearchParams();

  const { setTagFilter } = useTagFilter();

  const tag = searchParams.get('tag');

  useEffect(() => {
    setTagFilter(tag);
  }, [setTagFilter, tag]);
};

export default useQueryStringFilter;
