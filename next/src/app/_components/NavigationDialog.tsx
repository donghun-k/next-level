import Link from 'next/link';
import { IoIosClose } from 'react-icons/io';

import { LinkItem } from '@/models/dialog';

import Backdrop from './Backdrop';

interface Props {
  title?: string;
  linkList: LinkItem[];
  handleClose: () => void;
}

const NavigationDialog = ({
  title = 'NEXT LEVEL',
  handleClose,
  linkList,
}: Props) => {
  return (
    <Backdrop>
      <div className="relative min-w-[200px] rounded-md bg-gray-50/95 px-2 shadow-md">
        <div className="flex w-full items-center justify-between border-b-2 pb-2 pt-3">
          <h2 className="pl-2 text-xl font-bold text-gray-700">{title}</h2>
          <IoIosClose
            onClick={handleClose}
            className="h-9 w-9 cursor-pointer text-2xl text-gray-700 duration-300 hover:text-gray-500"
          />
        </div>
        <ul className="flex flex-col items-center justify-center gap-6 px-12 pb-6 pt-4 text-center">
          {linkList.map(({ text, path }) => (
            <li key={text}>
              <Link
                onClick={handleClose}
                className="cursor-pointer text-2xl font-bold text-gray-700 duration-300 hover:text-gray-500"
                href={path}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Backdrop>
  );
};

export default NavigationDialog;
