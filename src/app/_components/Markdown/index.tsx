import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import CodeBlock from './CodeBlock';
import ImageComponent from './ImageComponent';

interface Props {
  content: string;
}

const Markdown = ({ content }: Props) => {
  return (
    <ReactMarkdown
      className="prose max-w-none"
      remarkPlugins={[remarkGfm]}
      components={{
        code: CodeBlock,
        img: ImageComponent,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default Markdown;
