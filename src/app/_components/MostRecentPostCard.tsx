import Link from 'next/link';

import { Button } from '@/components/ui/button';
import type { PostData } from '@/types/post';
import { stripMarkdown } from '@/utils/markdown';

import NextImage from '../../components/common/NextImage';
import TagButton from '../../components/common/TagButton';

interface Props {
  postData: PostData;
}

const MostRecentPostCard = ({ postData }: Props) => {
  return (
    <article className="flex flex-row justify-between rounded-md bg-card p-8 shadow-sm">
      <Link href={`/post/${postData.id}`}>
        <NextImage
          src={postData.thumbnail}
          className="aspect-[10/7] w-[600px] rounded-md object-cover"
          alt={postData.title}
          width={1000}
          height={600}
        />
      </Link>
      <div className="flex w-[520px] flex-col justify-between pl-[30px]">
        <div>
          <p className="text-sm text-muted-foreground">{postData.date}</p>
          <Link href={`/post/${postData.id}`}>
            <h2 className="mt-1 line-clamp-2 break-keep text-3xl font-bold leading-[3rem] hover:underline">
              {postData.title}
            </h2>
          </Link>
          <div className="mt-2 flex gap-2 overflow-x-scroll">
            {postData.tags.map((tag) => (
              <TagButton key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <p className="line-clamp-6 leading-8">
          {stripMarkdown(postData.content)}
        </p>
        <Link href={`/post/${postData.id}`} className="size-fit">
          <Button className="size-fit px-6 py-4">Continue reading</Button>
        </Link>
      </div>
    </article>
  );
};

export default MostRecentPostCard;
