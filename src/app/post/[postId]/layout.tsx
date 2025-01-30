import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

import { getPostData } from '@/services/post';

export const generateMetadata = async ({
  params,
}: {
  params: { postId: string };
}): Promise<Metadata> => {
  const postData = getPostData(params.postId);

  if (!postData) {
    return {
      title: 'Not Found | NEXT LEVEL',
      description: '존재하지 않는 포스트입니다.',
    };
  }

  return {
    title: `${postData.title} | NEXT LEVEL`,
    description: postData.desc,
    openGraph: {
      title: `${postData.title} | NEXT LEVEL`,
      description: postData.desc,
      images: postData.thumbnail ?? '/images/thumbnails/DEFAULT_THUMBNAIL.png',
    },
  };
};

const PostLayout = ({ children }: PropsWithChildren) => {
  return children;
};

export default PostLayout;
