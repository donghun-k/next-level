import Link from "next/link";

import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="sticky mx-auto flex h-[140px] w-full flex-col items-center justify-around border-b-2 border-b-gray-100">
      <Link href="/">
        <h1 className="text-3xl font-black text-gray-700">NEXT LEVEL</h1>
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
