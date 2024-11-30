'use client';

import { Search } from 'lucide-react';
import type { ChangeEventHandler } from 'react';

import { Input } from '@/components/ui/input';

import { useSearchQuery } from '../../_hooks/useSearchQuery';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useSearchQuery();

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className="relative h-12 w-[400px]">
      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
      />
      <Input
        value={searchQuery}
        className="size-full pl-10"
        placeholder="Search posts by title"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
