"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MENU = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "POSTS", path: "/category/All" },
  { name: "CONTACT", path: "/contact" },
];

const Navigation = () => {
  const currentPath = "/" + usePathname().split("/")[1];

  return (
    <ul className="flex gap-12">
      {MENU.map(({ name, path }) => (
        <li key={name}>
          <Link
            href={path}
            className={`${
              currentPath === path
                ? "font-extrabold text-black [text-shadow:_0_2px_2px_rgb(0_0_0_/_20%)]"
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
