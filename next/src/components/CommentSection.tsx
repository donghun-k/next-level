import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

const CommentSection = () => {
  return (
    <section className="flex w-full flex-col gap-2">
      <h3 className="w-full border-b-2 border-b-gray-100 pb-2 text-2xl font-bold text-gray-700">
        2 Comments
      </h3>
      <ul className="flex flex-col gap-3">
        <CommentItem />
        <CommentItem />
      </ul>
      <CommentForm />
    </section>
  );
};

export default CommentSection;
