import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

import { cn } from '@/utils/className';

import NextImage from '../NextImage';

interface Props {
  source: string;
  className?: string;
}

const CodeBlock = ({ className, ...rest }: any) => {
  return <code className={cn('mono', className)} {...rest} />;
};

const MDXComponent = ({ source, className = '' }: Props) => {
  return (
    <div className={cn('prose dark:prose-invert', className)}>
      <MDXRemote
        source={source}
        components={{
          img: NextImage as any,
          code: CodeBlock,
        }}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
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
