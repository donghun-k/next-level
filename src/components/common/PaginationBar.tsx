import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from 'react-icons/fi';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '../ui/pagination';

const BULLETS = 10;

interface Props {
  lastPage: number;
  currentPage: number;
  className?: string;
  onChange: (page: number) => void;
}

const PaginationBar = ({
  lastPage,
  currentPage,
  className = '',
  onChange,
}: Props) => {
  const start =
    currentPage % BULLETS === 0
      ? currentPage - (BULLETS - 1)
      : Math.floor(currentPage / BULLETS) * BULLETS + 1;
  const end = Math.min(start + BULLETS - 1, lastPage);
  const pageList = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const handlePrev = () => {
    onChange(start - 1);
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    onChange(end + 1);
    window.scrollTo(0, 0);
  };
  const handleStart = () => {
    onChange(1);
    window.scrollTo(0, 0);
  };
  const handleEnd = () => {
    onChange(lastPage);
    window.scrollTo(0, 0);
  };

  return (
    <Pagination className={className}>
      <PaginationContent>
        {start > BULLETS && (
          <>
            <PaginationItem onClick={handleStart}>
              <FiChevronsLeft />
            </PaginationItem>
            <PaginationItem onClick={handlePrev}>
              <FiChevronLeft />
            </PaginationItem>
          </>
        )}
        {pageList.map((page) =>
          page > lastPage ? null : (
            <PaginationItem key={page}>
              <PaginationLink
                isActive={page === currentPage}
                onClick={() => onChange(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        )}
        {end < lastPage && (
          <>
            <PaginationItem onClick={handleNext}>
              <FiChevronRight />
            </PaginationItem>
            <PaginationItem onClick={handleEnd}>
              <FiChevronsRight />
            </PaginationItem>
          </>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationBar;
