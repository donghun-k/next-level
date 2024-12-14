import MDXComponent from '@/components/common/MDXComponent';
import type { PostData } from '@/types/post';

import { extractToc } from '../_utils/toc';
import TableOfContents from './TableOfContents';

interface Props {
  postData: PostData;
}

const PostBody = ({ postData }: Props) => {
  const toc = extractToc(postData.content);

  return (
    <section className="relative mx-auto flex max-w-screen-xl justify-center gap-[60px]">
      <article className="w-full max-w-screen-md [&_.prose]:max-w-none">
        <MDXComponent source={postData.content} />
      </article>
      <aside className="absolute right-0 top-0 hidden xl:block">
        <TableOfContents toc={toc} />
      </aside>
    </section>
  );
};

export default PostBody;
