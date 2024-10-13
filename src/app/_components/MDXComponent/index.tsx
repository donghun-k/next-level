import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

import { cn } from '@/lib/utils';

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
          img: Image as any,
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
