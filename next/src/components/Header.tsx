import Link from "next/link";

import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 mx-auto flex h-[140px] w-full flex-col items-center justify-around border-b-2 border-b-gray-100 bg-white bg-opacity-95">
      <Link href="/">
        <h1 className="text-3xl font-black text-gray-700">NEXT LEVEL</h1>
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
