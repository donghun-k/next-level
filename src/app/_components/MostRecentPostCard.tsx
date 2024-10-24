import { Button } from '@/components/ui/button';
import type { PostData } from '@/services/post';
import { stripMarkdown } from '@/utils/markdown';

import NextImage from './NextImage';
import TagButton from './TagButton';

interface Props {
  postData: PostData;
}

const MostRecentPostCard = ({ postData }: Props) => {
  return (
    <article className="flex flex-row justify-between">
      <NextImage
        src={postData.thumbnail}
        className="aspect-[10/7] w-[700px] rounded-2xl object-cover"
        alt={postData.title}
        width={1000}
        height={600}
      />
      <div className="flex w-[500px] flex-col justify-between pl-[30px]">
        <div>
          <p className="text-sm">{postData.date}</p>
          <h2 className="mt-4 line-clamp-2 break-keep text-4xl font-bold leading-[3rem]">
            {postData.title}
          </h2>
          <div className="mt-4 flex gap-2 overflow-x-scroll">
            {postData.tags.map((tag) => (
              <TagButton key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <p className="line-clamp-5 text-lg leading-8">
          {stripMarkdown(postData.content)}
        </p>
        <Button className="size-fit rounded-full px-6 py-4 text-xl font-bold">
          Continue reading
        </Button>
      </div>
    </article>
  );
};

export default MostRecentPostCard;
