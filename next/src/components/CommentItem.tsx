const CommentItem = () => {
  return (
    <li className="flex w-full flex-col">
      <div className="flex w-full items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <p className="text-md font-semibold">Lorem</p>
          <span className="mt-1 text-xs text-gray-500">2023.12.14</span>
        </div>
        <div className="flex items-center gap-6 pr-2">
          <button className="text-sm text-gray-500 hover:text-gray-700">
            Edit
          </button>
          <button className="text-sm text-gray-500 hover:text-gray-700">
            Delete
          </button>
        </div>
      </div>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet consectetur. Sodales enim lacinia consectetur
        neque faucibus eu arcu morbi. Curabitur dui enim non ultricies
        consectetur placerat arcu consectetur.
      </p>
    </li>
  );
};

export default CommentItem;
