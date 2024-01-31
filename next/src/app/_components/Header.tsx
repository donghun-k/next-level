import Link from "next/link";

import { LinkItem } from "@/models/dialog";

import Navigation from "./Navigation";
import MenuButton from "./MenuButton";

const LINKLIST: LinkItem[] = [
  { text: "HOME", path: "/" },
  { text: "ABOUT", path: "/about" },
  { text: "POSTS", path: "/posts/All" },
  { text: "CONTACT", path: "/contact" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 mx-auto flex h-[80px] w-full flex-row items-center justify-between border-b-2 border-b-gray-100 bg-white bg-opacity-95 px-6 sm:h-[140px] sm:flex-col sm:justify-around sm:px-0">
      <Link href="/">
        <h1 className="text-2xl font-black text-gray-700 sm:text-3xl">
          NEXT LEVEL
        </h1>
      </Link>
      <MenuButton linkList={LINKLIST} />
      <Navigation linkList={LINKLIST} />
    </header>
  );
};

export default Header;
