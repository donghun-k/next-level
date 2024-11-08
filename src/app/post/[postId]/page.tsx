import { redirect } from 'next/navigation';

import { getPostData } from '@/services/post';

interface Props {
  params: {
    postId: string;
  };
}
const PostPage = ({ params: { postId } }: Props) => {
  if (!postId) redirect('/not-found');
  const postData = getPostData(postId);
  if (!postData) redirect('/not-found');
  return (
    <div>
      <h1>{postData.title}</h1>
    </div>
  );
};

export default PostPage;
