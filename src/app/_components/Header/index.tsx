import Link from 'next/link';

import ModeToggle from './ModeToggle';
import SearchButton from './SearchButton';

const Header = () => {
  return (
    <header className="sticky inset-0 z-50 flex h-[80px] w-full items-center bg-background/80 shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-[30px] max-md:px-4">
        <Link className="text-4xl font-extrabold max-md:text-xl" href="/">
          NEXT LEVEL
        </Link>
        <nav className="flex items-center gap-6 max-md:gap-4">
          <ul className="flex items-center gap-4 max-md:gap-2">
            <li>
              <Link className="max-md:text-sm" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="max-md:text-sm" href="/profile">
                Profile
              </Link>
            </li>
            <li>
              <Link className="max-md:text-sm" href="/posts">
                Posts
              </Link>
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
