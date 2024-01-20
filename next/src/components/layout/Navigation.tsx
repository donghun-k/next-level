"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MENU = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "POSTS", path: "/posts/All" },
  { name: "CONTACT", path: "/contact" },
];

const Navigation = () => {
  const currentPath = "/" + usePathname().split("/")[1];

  return (
    <ul className="hidden gap-12 sm:flex">
      {MENU.map(({ name, path }) => (
        <li key={name}>
          <Link
            href={path}
            className={`${
              currentPath === "/" + path.split("/")[1]
                ? "drop-shadow-custom font-extrabold text-black"
                : "font-bold text-gray-500"
            } duration-300`}
          >
            <span className="">{name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
