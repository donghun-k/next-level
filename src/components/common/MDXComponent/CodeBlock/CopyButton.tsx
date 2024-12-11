'use client';

import { Clipboard, ClipboardCheck } from 'lucide-react';
import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';

interface Props {
  codeNode: ReactNode;
}
const CopyButton = ({ codeNode }: Props) => {
  const [code, setCode] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const codeRef = useRef<HTMLPreElement>(null);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  useEffect(() => {
    setCode(codeRef.current?.textContent || '');
  }, [codeRef]);

  return (
    <>
      <Button
        variant="secondary"
        onClick={copyToClipboard}
        className="absolute right-2 top-2 h-fit py-1 text-xs font-normal"
      >
        {isCopied ? (
          <>
            <ClipboardCheck className="mr-1 size-3.5" />
            Copied!
          </>
        ) : (
          <>
            <Clipboard className="mr-1 size-3.5" />
            Copy
          </>
        )}
      </Button>
      <pre className="hidden" ref={codeRef}>
        {codeNode}
      </pre>
    </>
  );
};

export default CopyButton;
