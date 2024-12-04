import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';

type SearchQuery = string;
const searchQueryAtom = atom<SearchQuery>('');
const isTypingAtom = atom<boolean>(false);

export const useSearchQuery = () => {
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
  const [isTyping, setIsTyping] = useAtom(isTypingAtom);

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
    isTyping,
    setIsTyping,
  };
};
