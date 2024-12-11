import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils/className';

type CodeProps = ComponentPropsWithoutRef<'code'>;

const InlineCode = ({ children, className, ...props }: CodeProps) => {
  return (
    <code className={cn('mono', className)} {...props}>
      {children}
    </code>
  );
};

export default InlineCode;
