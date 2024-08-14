import { IoSearch } from 'react-icons/io5';

import { Button } from '@/components/ui/button';

const SearchButton = () => {
  return (
    <Button
      variant="outline"
      size="icon"
      className="border-none shadow-none focus-visible:ring-0"
    >
      <IoSearch className="size-6" />
    </Button>
  );
};

export default SearchButton;
