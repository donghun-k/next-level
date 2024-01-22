"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MenuItem } from "@/models/menu";

const Navigation = ({ menuList }: { menuList: MenuItem[] }) => {
  const currentPath = "/" + usePathname().split("/")[1];

  return (
    <ul className="hidden gap-12 sm:flex">
      {menuList.map(({ text, path }) => (
        <li key={text}>
          <Link
            href={path}
            className={`${
              currentPath === "/" + path.split("/")[1]
                ? "font-extrabold text-black drop-shadow-custom"
                : "font-bold text-gray-500"
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
