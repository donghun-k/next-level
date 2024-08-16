'use client';

import { useTheme } from 'next-themes';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  materialDark,
  materialLight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ className, children, ...rest }: any) => {
  const match = /language-(\w+)/.exec(className || '');

  const { theme } = useTheme();

  return match ? (
    <SyntaxHighlighter
      PreTag="div"
      language={match[1]}
      style={theme === 'dark' ? materialDark : materialLight}
      {...rest}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...rest}>
      {children}
    </code>
  );
};

export default CodeBlock;
