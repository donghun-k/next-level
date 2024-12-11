import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils/className';

import CopyButton from './CopyButton';

type PreProps = ComponentPropsWithoutRef<'pre'>;

const CodeBlock = ({ children, className, ...props }: PreProps) => {
  const codeElement = children as React.ReactElement;
  const code = codeElement.props.children;

  const language = codeElement.props.className?.replace('language-', '');

  return (
    <>
      <p>{language}</p>
      <div className="group relative">
        <pre
          className={cn(
            'relative overflow-x-auto py-4 text-sm mono leading-6',
            className
          )}
          {...props}
        >
          {children}
        </pre>
        <CopyButton codeNode={code} />
      </div>
    </>
  );
};

export default CodeBlock;
