import Image from 'next/image';

import { Button } from '@/components/ui/button';
import type { PostData } from '@/services/post';

interface Props {
  postData: PostData;
}

const PostListItemCard = ({ postData }: Props) => {
  return (
    <li className="h-fit w-[calc(1180px/3)]">
      <Image
        src={postData.thumbnail}
        className="aspect-[10/7] w-full rounded-xl object-cover"
        alt={postData.title}
        width={1000}
        height={600}
      />
      <p className="mt-2 line-clamp-1 text-2xl font-bold">{postData.title}</p>
      <ul className="mt-2 flex gap-2 overflow-x-scroll">
        {postData.tags.map((tag) => (
          <li key={tag} className="inline-block">
            <Button className="rounded-full px-4 py-2 text-sm font-bold">
              {tag}
            </Button>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-sm">{postData.date}</p>
    </li>
  );
};

export default PostListItemCard;
