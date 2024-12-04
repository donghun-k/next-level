'use client';

import { Search } from 'lucide-react';
import { type ChangeEventHandler, useRef } from 'react';

import { Input } from '@/components/ui/input';

import { useSearchQuery } from '../../_hooks/useSearchQuery';

const SearchBar = () => {
  const { setSearchQuery, setIsTyping } = useSearchQuery();

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsTyping(true);
    timerRef.current = setTimeout(() => {
      setIsTyping(false);
      setSearchQuery(e.target.value);
    }, 1000);
  };

  return (
    <div className="relative h-12 w-[400px]">
      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
      />
      <Input
        className="size-full pl-10"
        placeholder="Search posts by title"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
