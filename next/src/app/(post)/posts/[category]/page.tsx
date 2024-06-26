import { Metadata } from 'next';

import { getCategoryList } from '@/services/category';

import PostsSection from '../_components/PostsSection';

export const generateMetadata = async ({
  params: { category },
}: {
  params: { category: string };
}): Promise<Metadata> => {
  return {
    title: `Posts in '${category}' ┃ NEXT LEVEL`,
    description: `${category} 카테고리의 포스트 목록입니다.`,
    openGraph: {
      title: `Posts in '${category}' ┃ NEXT LEVEL`,
      description: `${category} 카테고리의 포스트 목록입니다.`,
    },
  };
};

const PostsPage = async () => {
  const categoryList = await getCategoryList();
  return <PostsSection categoryList={categoryList} />;
};

export default PostsPage;
