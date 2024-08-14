import Link from 'next/link';
import { IoSearch } from 'react-icons/io5';

import { ModeToggle } from './ModeToggle';

const Header = () => {
  return (
    <header className="sticky inset-0 flex h-[80px] w-full items-center px-[30px]">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between">
        <Link className="text-4xl font-extrabold" href="/">
          NEXT LEVEL
        </Link>
        <nav>
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
            <li>
              <ModeToggle />
            </li>
            <li>
              <IoSearch role="button" className="size-6" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
