import MDXComponent from '@/components/common/MDXComponent';
import type { PostData } from '@/types/post';

import { extractToc } from '../../_utils/toc';
import TableOfContents from './TableOfContents';

interface Props {
  postData: PostData;
}

const PostBody = ({ postData }: Props) => {
  const toc = extractToc(postData.content);

  return (
    <section className="relative mx-auto flex max-w-screen-xl justify-center">
      <article className="w-full max-w-screen-md [&_.prose]:max-w-none">
        <MDXComponent source={postData.content} />
      </article>
      <aside className="hidden xl:block">
        <div className="fixed top-1/2 w-[200px] -translate-y-1/2">
          <TableOfContents toc={toc} />
        </div>
      </aside>
    </section>
  );
};

export default PostBody;
