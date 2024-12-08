import TagButton from '@/components/common/TagButton';
import type { PostData } from '@/types/post';

interface Props {
  postData: PostData;
}

const PostHeader = ({ postData }: Props) => {
  return (
    <section className="flex flex-col items-center">
      <div className="mt-8 flex w-full flex-col items-center">
        <h1 className="text-center text-4xl font-bold">{postData.title}</h1>
        <time className="mt-4 text-muted-foreground">{postData.date}</time>
        <div className="mt-4 flex gap-2">
          {postData.tags.map((tag) => (
            <TagButton key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostHeader;
