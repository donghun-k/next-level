'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LinkItem } from '@/models/dialog';

const Navigation = ({ linkList }: { linkList: LinkItem[] }) => {
  const currentPath = '/' + usePathname().split('/')[1];

  return (
    <ul className="hidden gap-12 sm:flex">
      {linkList.map(({ text, path }) => (
        <li key={text}>
          <Link
            href={path}
            className={`${
              currentPath === '/' + path.split('/')[1]
                ? 'drop-shadow-custom font-extrabold text-black'
                : 'font-bold text-gray-500'
            } duration-300`}
          >
            <span className="">{text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
