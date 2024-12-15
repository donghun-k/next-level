'use client';

import type { MouseEvent } from 'react';
import { useEffect, useState } from 'react';

import { cn } from '@/utils/className';

import type { TocItem } from '../_types/toc';

interface Props {
  toc: TocItem[];
}

const TableOfContents = ({ toc }: Props) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      window.history.pushState({}, '', `#${id}`);
    }
  };

  return (
    <nav className="ml-8 max-h-[calc(100vh-160px)] w-full overflow-y-auto border-l pl-4">
      <ul className="space-y-1 text-sm">
        {toc.map((item) => (
          <li
            key={item.id}
            style={{ paddingLeft: `${(item.level - 1) * 8}px` }}
          >
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={cn(
                'block py-1 break-keep text-muted-foreground hover:text-foreground transition-colors',
                activeId === item.id && 'text-foreground font-medium'
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
