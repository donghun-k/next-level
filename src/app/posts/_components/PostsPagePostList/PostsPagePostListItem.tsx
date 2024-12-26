import Link from 'next/link';

import NextImage from '@/components/common/NextImage';
import TagButton from '@/components/common/TagButton';
import type { PostData } from '@/types/post';
import { stripMarkdown } from '@/utils/markdown';

interface Props {
  postData: PostData;
}
const PostsPagePostListItem = ({ postData }: Props) => {
  return (
    <li className="flex w-full gap-8 rounded-md bg-card p-4 pr-8 shadow-sm max-md:flex-col max-md:gap-4 max-md:p-4">
      <Link href={`/post/${postData.id}`} className="shrink-0">
        <NextImage
          src={postData.thumbnail}
          className="aspect-[4/3] w-80 rounded-md object-cover max-md:w-full"
          alt={postData.title}
          width={400}
          height={300}
        />
      </Link>
      <div className="flex w-[calc(100%-352px)] flex-col justify-start max-md:w-full">
        <div>
          <p className="text-sm text-muted-foreground max-md:text-xs">
            {postData.date}
          </p>
          <Link href={`/post/${postData.id}`} className="size-fit">
            <p className="mt-1 truncate break-keep text-xl font-bold hover:underline max-md:text-lg">
              {postData.title}
            </p>
          </Link>
          <div className="mt-2 flex gap-2 overflow-x-scroll">
            {postData.tags.map((tag) => (
              <TagButton key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <p className="mt-4 line-clamp-4 leading-8 max-md:line-clamp-3 max-md:text-sm max-md:leading-6">
          {stripMarkdown(postData.content)}
        </p>
      </div>
    </li>
  );
};

export default PostsPagePostListItem;
