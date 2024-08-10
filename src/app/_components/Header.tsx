import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full h-[80px] sticky inset-0 flex items-center px-[30px]">
      <div className="max-w-screen-xl w-full mx-auto flex items-center justify-between">
        <Link className="text-4xl font-extrabold" href="/">
          NEXT LEVEL
        </Link>
        <nav>
          <ul className="flex gap-4">
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
