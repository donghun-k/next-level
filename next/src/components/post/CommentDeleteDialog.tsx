import { FormEventHandler } from "react";

import CommentDeletingProgress from "./CommentDeletingProgress";
import Backdrop from "../ui/Backdrop";

interface Props {
  closeDialog: () => void;
  deleteComment: (password: string) => Promise<void>;
}

const CommentDeleteDialog = ({ closeDialog, deleteComment }: Props) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const password = e.currentTarget.password.value;
    closeDialog();
    deleteComment(password);
  };
  return (
    <Backdrop>
      <form
        onSubmit={handleSubmit}
        className="flex h-[140px] w-[200px] flex-col items-center justify-evenly rounded-md bg-gray-100 p-2 shadow-md"
      >
        <label htmlFor="password" className="text-xl font-bold text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="h-6 w-[160px] rounded-sm "
        />
        <div className="mt-2 flex gap-2">
          <button
            type="submit"
            className="rounded-sm bg-gray-500 px-4 py-1 text-sm text-white duration-300 hover:bg-gray-400"
          >
            Delete
          </button>
          <button
            type="button"
            onClick={closeDialog}
            className="rounded-sm bg-gray-500 px-4 py-1 text-sm text-white duration-300 hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>
    </Backdrop>
  );
};

export default CommentDeleteDialog;
