import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';

const PostSearchFilter = () => {
  return (
    <section className="flex items-center justify-center p-8">
      <div className="relative h-12 w-full max-w-xl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2" />
        <Input
          className="size-full pl-12 text-xl"
          placeholder="Search posts by title"
        />
      </div>
    </section>
  );
};

export default PostSearchFilter;
