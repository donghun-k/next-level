import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Posts | NEXT LEVEL',
  description: 'Donghun Kim의 블로그 포스트 목록입니다.',
};

const PostsLayout = ({ children }: PropsWithChildren) => {
  return children;
};

export default PostsLayout;
