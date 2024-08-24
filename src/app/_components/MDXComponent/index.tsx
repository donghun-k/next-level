import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

interface Props {
  source: string;
  hideCodeBorder?: boolean;
}

const MDXComponent = ({ source, hideCodeBorder = false }: Props) => {
  return (
    <div
      className={`prose dark:prose-invert ${hideCodeBorder ? '[&_pre]:border-none' : ''}`}
    >
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
                  keepBackground: false,
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
