import Link from 'next/link';
import { IoSearch } from 'react-icons/io5';

import { Button } from '@/components/ui/button';

import { ModeToggle } from './ModeToggle';

const Header = () => {
  return (
    <header className="sticky inset-0 flex h-[80px] w-full items-center px-[30px]">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between">
        <Link className="text-4xl font-extrabold" href="/">
          NEXT LEVEL
        </Link>
        <nav className="flex items-center gap-6">
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
          </ul>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button
              variant="outline"
              size="icon"
              className="border-none shadow-none focus-visible:ring-0"
            >
              <IoSearch className="size-6" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
