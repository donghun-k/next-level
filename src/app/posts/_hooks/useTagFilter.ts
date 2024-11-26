import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';

type TagFilter = string | null;
const tagFilterAtom = atom<TagFilter>(null);

export const useTagFilter = () => {
  const [tagFilter, setTagFilter] = useAtom(tagFilterAtom);

  const handleTagChange = useCallback(
    (tag: TagFilter) => {
      const sanitizedTag = tag?.trim() || null;
      setTagFilter(sanitizedTag);
    },
    [setTagFilter]
  );

  return {
    tagFilter,
    setTagFilter: handleTagChange,
  };
};
