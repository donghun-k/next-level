import Link from 'next/link';

import { Button } from '@/components/ui/button';
import type { PostData } from '@/types/post';
import { stripMarkdown } from '@/utils/markdown';

import NextImage from '../../../components/common/NextImage';
import TagButton from '../../../components/common/TagButton';

interface Props {
  postData: PostData;
}

const MostRecentPostCard = ({ postData }: Props) => {
  return (
    <article className="flex flex-row justify-between rounded-md bg-card p-8 shadow-sm max-md:flex-col">
      <Link href={`/post/${postData.id}`}>
        <NextImage
          src={postData.thumbnail}
          className="aspect-[10/7] w-[600px] rounded-md object-cover"
          alt={postData.title}
          width={1000}
          height={600}
        />
      </Link>
      <div className="flex w-[520px] flex-col justify-between pl-[30px] max-md:mt-4 max-md:w-full max-md:pl-0">
        <div>
          <p className="text-sm text-muted-foreground max-md:text-xs">
            {postData.date}
          </p>
          <Link href={`/post/${postData.id}`}>
            <h2 className="mt-1 line-clamp-2 break-keep text-3xl font-bold leading-[3rem] hover:underline max-md:text-2xl">
              {postData.title}
            </h2>
          </Link>
          <div className="mt-2 flex gap-2 overflow-x-scroll">
            {postData.tags.map((tag) => (
              <TagButton key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <p className="line-clamp-6 leading-8 max-md:my-4 max-md:line-clamp-3 max-md:leading-6">
          {stripMarkdown(postData.content)}
        </p>
        <Link href={`/post/${postData.id}`} className="size-fit max-md:w-full">
          <Button className="size-fit px-6 py-4 max-md:w-full">
            Continue reading
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default MostRecentPostCard;
