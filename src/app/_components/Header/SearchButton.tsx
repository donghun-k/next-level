'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';

import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import type { PostData } from '@/types/post';

import { getPostDataListAction } from '../../../actions/posts';
import { getTagListAction } from '../../../actions/tags';

const SearchButton = () => {
  const [open, setOpen] = useState(false);
  const [postDataList, setPostDataList] = useState<PostData[]>([]);
  const [tagList, setTagList] = useState<string[]>([]);

  const router = useRouter();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleMoveToPostPage = (id: string) => () => {
    setOpen(false);
    router.push(`/post/${id}`);
  };

  const handleMoveToSearchByTag = (tag: string) => () => {
    setOpen(false);
    router.push(`/posts?tag=${tag}`);
  };

  useEffect(() => {
    (async () => {
      setPostDataList(await getPostDataListAction());
      setTagList(await getTagListAction());
    })();
  }, []);
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
          <CommandGroup heading="Posts">
            {postDataList.map((post) => (
              <CommandItem
                className="cursor-pointer"
                key={post.id}
                onSelect={handleMoveToPostPage(post.id)}
              >
                <p>{post.title}</p>
                <CommandShortcut>Move to this post</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Tags">
            {tagList.map((tag) => (
              <CommandItem
                className="cursor-pointer"
                key={tag}
                onSelect={handleMoveToSearchByTag(tag)}
              >
                <p>{tag}</p>
                <CommandShortcut>Search by this tag</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchButton;
