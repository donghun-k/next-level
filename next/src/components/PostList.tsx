import PostListItem from "./PostListItem";

const PostList = () => {
  return (
    <ul className="flex w-full flex-col gap-8">
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </ul>
  );
};

export default PostList;
