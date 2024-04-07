'use client';

import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';

import { LinkItem } from '@/models/dialog';

import NavigationDialog from '../NavigationDialog';

const MenuButton = ({ linkList }: { linkList: LinkItem[] }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseMenu = () => setOpenDialog(false);
  return (
    <>
      <IoMenu
        onClick={handleOpenDialog}
        className="h-8 w-8 cursor-pointer text-2xl text-gray-700 duration-300 hover:text-gray-500 sm:hidden"
      />
      {openDialog && (
        <NavigationDialog linkList={linkList} handleClose={handleCloseMenu} />
      )}
    </>
  );
};

export default MenuButton;
