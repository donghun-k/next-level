import NextImage from '@/app/_components/NextImage';
import TagButton from '@/app/_components/TagButton';
import type { PostData } from '@/services/post';
import { stripMarkdown } from '@/utils/markdown';

interface Props {
  postData: PostData;
}
const PostsPagePostListItem = ({ postData }: Props) => {
  return (
    <li className="flex w-full gap-[20px]">
      <NextImage
        src={postData.thumbnail}
        className="h-[300px] w-[400px] rounded-xl object-cover"
        alt={postData.title}
        width={400}
        height={300}
      />
      <div className="flex w-[calc(100%-420px)] flex-col justify-start">
        <div>
          <p className="text-sm">{postData.date}</p>
          <h2 className="mt-2 line-clamp-2 break-keep text-2xl font-bold leading-[3rem]">
            {postData.title}
          </h2>
          <div className="mt-2 flex gap-2 overflow-x-scroll">
            {postData.tags.map((tag) => (
              <TagButton key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <p className="mt-4 line-clamp-5 text-lg leading-8">
          {stripMarkdown(postData.content)}
        </p>
      </div>
    </li>
  );
};

export default PostsPagePostListItem;
