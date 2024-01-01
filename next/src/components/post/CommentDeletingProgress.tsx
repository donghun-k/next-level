"use client";

import { PulseLoader } from "react-spinners";

import Backdrop from "../ui/Backdrop";

const CommentDeletingProgress = () => {
  return (
    <Backdrop>
      <PulseLoader
        color="#374151"
        size={25}
        speedMultiplier={0.5}
        cssOverride={{
          gap: "30px",
        }}
      />
    </Backdrop>
  );
};

export default CommentDeletingProgress;
