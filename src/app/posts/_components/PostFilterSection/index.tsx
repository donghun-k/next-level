'use client';

import { Search } from 'lucide-react';
import type { ChangeEventHandler } from 'react';

import { Input } from '@/components/ui/input';

import { useSearchQuery } from '../../_hooks/useSearchQuery';

const PostFilterSections = () => {
  const { searchQuery, setSearchQuery } = useSearchQuery();

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section className="flex items-center justify-center p-8">
      <div className="relative h-12 w-full max-w-xl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2" />
        <Input
          value={searchQuery}
          className="size-full pl-12 text-xl"
          placeholder="Search posts by title"
          onChange={handleSearchChange}
        />
      </div>
    </section>
  );
};

export default PostFilterSections;
