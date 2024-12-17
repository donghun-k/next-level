import { redirect } from 'next/navigation';

import PostHeader from '@/app/post/[postId]/_components/PostHeader';
import { Separator } from '@/components/ui/separator';
import { getPostData } from '@/services/post';

import PostBody from './_components/PostBody';

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
    <main className="mx-auto min-h-[calc(100vh-196px)] max-w-screen-xl px-8 py-10">
      <PostHeader postData={postData} />
      <Separator className="mx-auto my-10 max-w-[800px]" />
      <PostBody postData={postData} />
    </main>
  );
};

export default PostPage;
