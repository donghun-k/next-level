"use client";
import { useState } from "react";

import NavigationDialog from "@/app/_ui/NavigationDialog";

const CategoryButton = ({ categoryList }: { categoryList: string[] }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseMenu = () => setOpenDialog(false);

  const categoryArray = ["All", ...categoryList];

  const linkList = categoryArray.map((category) => ({
    path: `/posts/${category}`,
    text: category,
  }));

  return (
    <>
      <button
        onClick={handleOpenDialog}
        className="w-fit text-sm text-gray-500 sm:hidden"
      >
        Select a category
      </button>
      {openDialog && (
        <NavigationDialog
          linkList={linkList}
          handleClose={handleCloseMenu}
          title="Category"
        />
      )}
    </>
  );
};

export default CategoryButton;
