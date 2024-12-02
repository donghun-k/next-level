'use client';

import { ChevronsUpDown } from 'lucide-react';
import { useEffect, useState } from 'react';

import { getTagListAction } from '@/actions/tag';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/utils/className';

import { useTagFilter } from '../../_hooks/useTagFilter';

const TagFilter = () => {
  const [open, setOpen] = useState(false);
  const [tagList, setTagList] = useState<string[]>([]);
  const { tagFilter, setTagFilter } = useTagFilter();

  useEffect(() => {
    (async () => {
      setTagList(await getTagListAction());
    })();
  }, []);

  const handleSelect = (tag: string) => {
    setTagFilter(tag);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            'h-12 w-[200px] justify-between text-muted-foreground font-normal',
            tagFilter && 'text-primary'
          )}
        >
          {tagFilter || 'Filter by tag'}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search tag" />
          <CommandList>
            <CommandEmpty>No tag found.</CommandEmpty>
            <CommandGroup>
              {tagList.map((tag) => (
                <CommandItem key={tag} onSelect={handleSelect}>
                  {tag}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default TagFilter;
