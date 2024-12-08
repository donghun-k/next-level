import { redirect } from 'next/navigation';

import PostHeader from '@/app/post/[postId]/_components/PostHeader';
import { Separator } from '@/components/ui/separator';
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
    <main className="mx-auto min-h-[calc(100vh-80px)] max-w-screen-xl px-8 py-10">
      <PostHeader postData={postData} />
      <Separator className="my-10" />
    </main>
  );
};

export default PostPage;
