import { Comment } from "@/models/comment";

const CommentItem = ({ comment }: { comment: Comment }) => {
  const { author, content, createdAt } = comment;
  return (
    <li className="flex w-full flex-col">
      <div className="flex w-full items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <p className="text-md font-semibold">{author}</p>
          <span className="mt-1 text-xs text-gray-500">{createdAt}</span>
        </div>
        <button className="text-sm text-gray-500 hover:text-gray-700">
          Delete
        </button>
      </div>
      <p className="text-gray-700 ">{content}</p>
    </li>
  );
};

export default CommentItem;
