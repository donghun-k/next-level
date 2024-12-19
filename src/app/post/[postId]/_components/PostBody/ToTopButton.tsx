'use client';

import { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

import { Button } from '@/components/ui/button';

const ToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 위치에 따라 버튼 표시 여부 결정
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // 상단으로 스크롤 이동
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return isVisible ? (
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
  ) : null;
};

export default ToTopButton;
