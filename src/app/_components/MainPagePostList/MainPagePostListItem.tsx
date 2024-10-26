import type { PostData } from '@/services/post';

import NextImage from '../NextImage';
import TagButton from '../TagButton';

interface Props {
  postData: PostData;
}

const MainPagePostListItem = ({ postData }: Props) => {
  return (
    <li className="h-fit w-[calc(1180px/3)]">
      <NextImage
        src={postData.thumbnail}
        className="aspect-[10/7] w-full rounded-xl object-cover"
        alt={postData.title}
        width={1000}
        height={600}
      />
      <p className="mt-2 line-clamp-1 text-2xl font-bold">{postData.title}</p>
      <div className="mt-1 flex gap-2 overflow-x-scroll">
        {postData.tags.map((tag) => (
          <TagButton key={tag} tag={tag} />
        ))}
      </div>
      <p className="mt-2 text-sm">{postData.date}</p>
    </li>
  );
};

export default MainPagePostListItem;
