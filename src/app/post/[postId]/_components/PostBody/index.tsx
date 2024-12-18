import MDXComponent from '@/components/common/MDXComponent';
import type { PostData } from '@/types/post';

import { extractToc } from '../../_utils/toc';
import TableOfContents from './TableOfContents';
import ToTopButton from './ToTopButton';

interface Props {
  postData: PostData;
}

const PostBody = ({ postData }: Props) => {
  const toc = extractToc(postData.content);

  return (
    <section className="relative mx-auto flex max-w-screen-xl justify-center">
      <aside className="hidden xl:block">
        <div className="sticky top-1/2 flex w-[200px] -translate-y-1/2 justify-end pr-10">
          <ToTopButton />
        </div>
      </aside>
      <article className="w-full max-w-screen-md [&_.prose]:max-w-none">
        <MDXComponent source={postData.content} />
      </article>
      <aside className="hidden xl:block">
        <div className="sticky top-1/2 flex w-[200px] -translate-y-1/2 justify-start pl-10">
          <TableOfContents toc={toc} />
        </div>
      </aside>
    </section>
  );
};

export default PostBody;
