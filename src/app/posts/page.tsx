import { Separator } from '@/components/ui/separator';

import PostSearchFilter from './_components/PostSearchFilter';
import PostsPagePostList from './_components/PostsPagePostList';

const PostsPage = () => {
  return (
    <main className="mx-auto min-h-[calc(100vh-80px)] max-w-screen-xl px-8 py-10">
      <PostSearchFilter />
      <Separator className="my-10" />
      <PostsPagePostList />
    </main>
  );
};

export default PostsPage;
