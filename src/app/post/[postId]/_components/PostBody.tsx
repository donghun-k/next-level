import MDXComponent from '@/components/common/MDXComponent';
import type { PostData } from '@/types/post';

interface Props {
  postData: PostData;
}

const PostBody = ({ postData }: Props) => {
  return (
    <section className="mx-auto max-w-[800px] [&_.prose]:max-w-none">
      <MDXComponent source={postData.content} />
    </section>
  );
};

export default PostBody;
