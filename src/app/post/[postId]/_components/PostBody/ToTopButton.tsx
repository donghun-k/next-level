'use client';

import { IoIosArrowUp } from 'react-icons/io';

import { Button } from '@/components/ui/button';

const ToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className="size-10 rounded-full bg-secondary p-0
                text-secondary-foreground opacity-70 shadow-lg transition-all duration-300
                hover:bg-secondary/80 hover:opacity-100"
      aria-label="페이지 상단으로 이동"
      type="button"
    >
      <IoIosArrowUp className="m-auto size-6" />
    </Button>
  );
};

export default ToTopButton;
