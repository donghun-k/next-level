import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";

const MarkdownViewer = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      className="prose w-full max-w-none text-sm sm:text-base"
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code(props) {
          const { children, className, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              PreTag="div"
              language={match[1]}
              {...rest}
              ref={null}
              style={materialDark}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
        img: (image) => (
          <Image
            className="w-full max-w-[600px] object-cover"
            src={image.src || ""}
            alt={image.alt || ""}
            width={600}
            height={600}
          />
        ),
        h1: ({ node, ...props }) => (
          <h1 className="text-2xl sm:text-4xl" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-xl sm:text-3xl" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-lg sm:text-2xl" {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownViewer;
