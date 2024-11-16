import Link from 'next/link';

import NextImage from '@/components/NextImage';
import TagButton from '@/components/TagButton';
import type { PostData } from '@/types/post';
import { stripMarkdown } from '@/utils/markdown';

interface Props {
  postData: PostData;
}
const PostsPagePostListItem = ({ postData }: Props) => {
  return (
    <li className="flex w-full gap-8 rounded-md bg-card p-8 shadow-sm">
      <Link href={`/post/${postData.id}`}>
        <NextImage
          src={postData.thumbnail}
          className="aspect-[4/3] w-80 rounded-md object-cover"
          alt={postData.title}
          width={400}
          height={300}
        />
      </Link>
      <div className="flex w-[calc(100%-352px)] flex-col justify-start">
        <div>
          <p className="text-sm text-muted-foreground">{postData.date}</p>
          <Link href={`/post/${postData.id}`} className="size-fit">
            <p className="mt-1 truncate break-keep text-xl font-bold hover:underline">
              {postData.title}
            </p>
          </Link>
          <div className="mt-2 flex gap-2 overflow-x-scroll">
            {postData.tags.map((tag) => (
              <TagButton key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <p className="mt-4 line-clamp-4 leading-8">
          {stripMarkdown(postData.content)}
        </p>
      </div>
    </li>
  );
};

export default PostsPagePostListItem;
