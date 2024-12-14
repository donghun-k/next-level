import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import { cn } from '@/utils/className';

import NextImage from '../NextImage';
import CodeBlock from './CodeBlock';
import InlineCode from './InlineCode';

interface Props {
  source: string;
  className?: string;
}

const MDXComponent = ({ source, className = '' }: Props) => {
  return (
    <div className={cn('prose dark:prose-invert', className)}>
      <MDXRemote
        source={source}
        components={{
          img: NextImage as any,
          pre: CodeBlock,
          code: InlineCode,
        }}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [
                rehypePrettyCode,
                {
                  theme: {
                    light: 'vitesse-light',
                    dark: 'vitesse-dark',
                  },
                },
              ],
            ],
          },
        }}
      />
    </div>
  );
};

export default MDXComponent;
