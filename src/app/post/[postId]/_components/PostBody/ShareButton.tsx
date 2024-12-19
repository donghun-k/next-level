'use client';

import { FiPaperclip } from 'react-icons/fi';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';

const ShareButton = () => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success('The link has been copied to the clipboard!');
    } catch (err) {
      toast.error('Failed to copy the link.');
    }
  };
  return (
    <Button
      onClick={copyToClipboard}
      className="size-10 rounded-full bg-secondary p-0
                text-secondary-foreground opacity-70 shadow-lg transition-all duration-300
                hover:bg-secondary/80 hover:opacity-100"
      aria-label="현재 페이지 링크 복사"
      type="button"
    >
      <FiPaperclip className="m-auto size-6" />
    </Button>
  );
};

export default ShareButton;
