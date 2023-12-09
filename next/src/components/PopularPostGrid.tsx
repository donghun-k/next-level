import React from "react";

import PopularPostCard from "./PopularPostCard";

const PopularPostGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-x-16 gap-y-8">
      <PopularPostCard />
      <PopularPostCard />
      <PopularPostCard />
      <PopularPostCard />
      <PopularPostCard />
      <PopularPostCard />
    </div>
  );
};

export default PopularPostGrid;
