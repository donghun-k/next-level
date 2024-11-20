'use client';

import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';

const SearchButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="border-none shadow-none focus-visible:ring-0"
        onClick={handleOpen}
      >
        <IoSearch className="size-6" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Post titles" />
          <CommandSeparator />
          <CommandGroup heading="Tags" />
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchButton;
