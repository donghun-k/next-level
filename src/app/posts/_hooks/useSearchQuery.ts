import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';

type SearchQuery = string;
const searchQueryAtom = atom<SearchQuery>('');

export const useSearchQuery = () => {
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);

  const handleSearchChange = useCallback(
    (query: string) => {
      const sanitizedQuery = query.trim();
      setSearchQuery(sanitizedQuery);
    },
    [setSearchQuery]
  );

  return {
    searchQuery,
    setSearchQuery: handleSearchChange,
  };
};
