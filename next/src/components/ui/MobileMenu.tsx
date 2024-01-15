import Link from "next/link";
import { IoIosClose } from "react-icons/io";

import Backdrop from "./Backdrop";

const MENU = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "POSTS", path: "/posts/All" },
  { name: "CONTACT", path: "/contact" },
];

const MobileMenu = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <Backdrop>
      <div className="relative rounded-md bg-gray-50/95 px-14 pb-10 pt-12 shadow-md">
        <ul className="flex flex-col items-center justify-center gap-6 text-center ">
          {MENU.map(({ name, path }) => (
            <li key={name}>
              <Link
                onClick={handleClose}
                className="cursor-pointer text-2xl font-bold text-gray-700 duration-300 hover:text-gray-500"
                href={path}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <IoIosClose
          onClick={handleClose}
          className="absolute right-1 top-1 h-10 w-10 cursor-pointer text-2xl text-gray-700 duration-300 hover:text-gray-500"
        />
      </div>
    </Backdrop>
  );
};

export default MobileMenu;
