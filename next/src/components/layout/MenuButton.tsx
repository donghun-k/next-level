"use client";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";

import { MenuItem } from "@/models/menu";

import MenuModal from "../ui/MenuModal";

const MenuButton = ({ menuList }: { menuList: MenuItem[] }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => setOpenMenu(true);
  const handleCloseMenu = () => setOpenMenu(false);
  return (
    <>
      <IoMenu
        onClick={handleOpenMenu}
        className="h-8 w-8 cursor-pointer text-2xl text-gray-700 duration-300 hover:text-gray-500 sm:hidden"
      />
      {openMenu && (
        <MenuModal menuList={menuList} handleClose={handleCloseMenu} />
      )}
    </>
  );
};

export default MenuButton;
