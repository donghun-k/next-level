import { getPostDataList } from '@/services/post';

import PostsPagePostListItem from './PostsPagePostListItem';

const PostsPagePostList = () => {
  const postDataList = getPostDataList().slice(0, 5);
  return (
    <ul className="flex flex-col gap-6">
      {postDataList.map((postData) => (
        <PostsPagePostListItem key={postData.title} postData={postData} />
      ))}
    </ul>
  );
};

export default PostsPagePostList;
