import Link from 'next/link';

import type { PostData } from '@/types/post';

import NextImage from '../../../components/NextImage';
import TagButton from '../../../components/TagButton';

interface Props {
  postData: PostData;
}

const MainPagePostListItem = ({ postData }: Props) => {
  return (
    <li className="h-fit w-[calc(1160px/3)] overflow-hidden rounded-md bg-card shadow-sm duration-300 hover:-translate-y-1">
      <Link href={`/post/${postData.id}`}>
        <NextImage
          src={postData.thumbnail}
          className="aspect-[10/7] w-full object-cover"
          alt={postData.title}
          width={1000}
          height={600}
        />
      </Link>
      <div className="p-4">
        <Link href={`/post/${postData.id}`}>
          <p className="line-clamp-1 text-xl font-bold hover:underline">
            {postData.title}
          </p>
        </Link>
        <div className="mt-1 flex gap-2 overflow-x-scroll">
          {postData.tags.map((tag) => (
            <TagButton key={tag} tag={tag} />
          ))}
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{postData.date}</p>
      </div>
    </li>
  );
};

export default MainPagePostListItem;
