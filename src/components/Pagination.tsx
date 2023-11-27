import React from "react";

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

  //   현재 페이지 렌더링 함수
  const renderPageNumbers = () => {
    const pageNumbers = Array.from(
      { length: totalPageCount },
      (_, index) => index + 1
    );

    return (
      <>
        {pageNumbers.map((page) => (
          <span
            key={page}
            onClick={() => {
              setOffset(page - 1);
            }}
            className={page === offset + 1 ? "boldFont" : ""}
          >
            {page}
          </span>
        ))}
      </>
    );
  };

  return (
    <div className=" center gap-50">
      <span onClick={() => handlePreviousPage()}>{`<`}</span>
      {renderPageNumbers()}
      <span onClick={() => handleNextPage()}>{`>`}</span>
    </div>
  );
};

export default Pagination;
