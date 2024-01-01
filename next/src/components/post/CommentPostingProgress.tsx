"use client";

import { useFormStatus } from "react-dom";
import { BsPencilSquare } from "react-icons/bs";

import Backdrop from "../ui/Backdrop";

const CommentPostingProgress = () => {
  const { pending } = useFormStatus();
  if (!pending) return null;
  return (
    <Backdrop>
      <BsPencilSquare className="progress text-white" size={100} />
    </Backdrop>
  );
};

export default CommentPostingProgress;
