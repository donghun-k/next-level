import { SimplePost } from '@/models/post';

import PostListItem from './PostListItem';
import NoPostsMessage from './NoPostsMessage';

const PostList = ({ posts }: { posts: SimplePost[] }) => {
  return (
    <ul className="flex flex-col items-center gap-6">
      {posts?.length === 0 && <NoPostsMessage />}
      {posts?.map((post) => <PostListItem key={post.id} post={post} />)}
    </ul>
  );
};

export default PostList;
