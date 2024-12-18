import Link from 'next/link';

import ModeToggle from './ModeToggle';
import SearchButton from './SearchButton';

const Header = () => {
  return (
    <header className="sticky inset-0 z-50 flex h-[80px] w-full items-center bg-background/80 shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-[30px]">
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
            <SearchButton />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
