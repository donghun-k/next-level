const CommentForm = () => {
  return (
    <form className="py-8">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <input
            required
            type="text"
            placeholder="Name"
            className="w-32 rounded-sm border-2 border-gray-300 px-1"
          />
          <input
            required
            type="password"
            placeholder="Password"
            className="w-40 rounded-sm border-2 border-gray-300 px-1"
          />
        </div>
        <button
          type="submit"
          className="rounded-sm bg-gray-500 px-12 text-sm text-white duration-300 hover:bg-gray-400"
        >
          Post
        </button>
      </div>
      <textarea
        required
        placeholder="Enter your comment here"
        className="mt-4 h-32 w-full resize-none rounded-sm border-2 border-gray-300 p-1 text-gray-500"
      />
    </form>
  );
};

export default CommentForm;
