import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { PaginationNav } from './styles';

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

interface PaginationProps {
  limit: number
  total: number
  offset: number
  setOffset: React.Dispatch<React.SetStateAction<number>>
}

const Pagination = ({
  limit,
  total,
  offset,
  setOffset
}: PaginationProps) => {
  const current = offset ? offset : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  function onPageChange(page: number) {
    setOffset(page);
  }

  return (
    <PaginationNav>
      <li>
        <button
          className="button"
          onClick={() => onPageChange(current - 1)}
          disabled={current === 1}
        >
          <IoIosArrowBack />
        </button>
      </li>
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={
                page === current
                  ? 'active'
                  : ''
              }
            >
              {page}
            </button>
          </li>
        ))}
      <li>
        <button
          className="button"
          onClick={() => onPageChange(current + 1)}
          disabled={current === pages}
        >
          <IoIosArrowForward />
        </button>
      </li>
    </PaginationNav>
  );
};

export default Pagination;
