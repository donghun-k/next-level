import Link from 'next/link';

import { Button } from '@/components/ui/button';
import type { PostData } from '@/types/post';
import { stripMarkdown } from '@/utils/markdown';

import NextImage from './NextImage';
import TagButton from './TagButton';

interface Props {
  postData: PostData;
}

const MostRecentPostCard = ({ postData }: Props) => {
  return (
    <article className="flex flex-row justify-between">
      <Link href={`/post/${postData.id}`}>
        <NextImage
          src={postData.thumbnail}
          className="aspect-[10/7] w-[700px] rounded-2xl object-cover"
          alt={postData.title}
          width={1000}
          height={600}
        />
      </Link>
      <div className="flex w-[500px] flex-col justify-between pl-[30px]">
        <div>
          <p className="text-sm">{postData.date}</p>
          <Link href={`/post/${postData.id}`}>
            <h2 className="mt-4 line-clamp-2 break-keep text-4xl font-bold leading-[3rem] hover:underline">
              {postData.title}
            </h2>
          </Link>
          <div className="mt-4 flex gap-2 overflow-x-scroll">
            {postData.tags.map((tag) => (
              <TagButton key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <p className="line-clamp-5 text-lg leading-8">
          {stripMarkdown(postData.content)}
        </p>
        <Link href={`/post/${postData.id}`}>
          <Button className="size-fit px-6 py-4 text-xl">
            Continue reading
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default MostRecentPostCard;
