import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { IoSearch } from 'react-icons/io5';

import Link from 'next/link';
import { DialogContent } from '@radix-ui/react-dialog';
import { Input } from '@/components/ui/input';

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
