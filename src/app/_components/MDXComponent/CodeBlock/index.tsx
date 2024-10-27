import { type DetailedHTMLProps, type HTMLAttributes } from 'react';

import { cn } from '@/utils/className';

import CopyButton from './CopyButton';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const CodeBlock = ({ className, children, ...rest }: Props) => {
  return (
    <code className={cn('mono relative', className)} {...rest}>
      {children}
      <CopyButton codeNode={children} />
    </code>
  );
};

export default CodeBlock;
