import React, { useMemo } from "react";

interface PaginationProps {
  totalList: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  offset: number;
  limit: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalList,
  setOffset,
  offset,
  limit,
}) => {
  const itemsPerPage = limit;
  const totalPageCount = Math.ceil(totalList / itemsPerPage);

  // handle event
  const handleNextPage = () => {
    if (offset + 1 < totalPageCount) {
      setOffset((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (offset > 0) {
      setOffset((prev) => prev - 1);
    }
  };

  const handleDoubleNextPage = () => {
    if (offset + 5 < totalPageCount) {
      setOffset((prev) => prev + 5);
    }
  };

  const handleDoublePreviousPage = () => {
    if (offset > 5) {
      setOffset((prev) => prev - 5);
    }
  };

  //   현재 페이지 렌더링 함수
  const renderPageNumbers = useMemo(() => {
    let listNum = totalPageCount;
    let startPage = 0;

    if (totalPageCount > 5) listNum = 5; //초기 5값

    if (listNum < offset + 1 && listNum + 5 <= totalPageCount) {
      listNum = listNum + 5;
      startPage = startPage + 5;
    }

    if (listNum < offset + 1 && listNum + 5 > totalPageCount) {
      listNum = totalPageCount;
      startPage = totalPageCount - startPage;
    }

    const pageNumbers = Array.from(
      { length: listNum - startPage },
      (_, index) => startPage + index + 1
    );

    return pageNumbers.map((page) => (
      <span
        key={page}
        onClick={() => {
          setOffset(page - 1);
        }}
        className={page === offset + 1 ? "boldFont" : ""}
      >
        {page}
      </span>
    ));
  }, [totalPageCount, offset, setOffset]);

  return (
    <div className="center gap-50">
      <span onClick={() => handleDoublePreviousPage()}>{`<<`}</span>
      <span onClick={() => handlePreviousPage()}>{`<`}</span>
      {renderPageNumbers}
      <span onClick={() => handleNextPage()}>{`>`}</span>
      <span onClick={() => handleDoubleNextPage()}>{`>>`}</span>
    </div>
  );
};

export default Pagination;
