import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

interface Props {
  source: string;
}

const MDXComponent = ({ source }: Props) => {
  return (
    <MDXRemote
      source={source}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            [
              rehypePrettyCode,
              {
                theme: 'red',
              },
            ],
          ],
        },
      }}
    />
  );
};

export default MDXComponent;
