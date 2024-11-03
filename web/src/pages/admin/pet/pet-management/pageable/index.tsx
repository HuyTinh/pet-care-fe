import React from 'react';

const PageAble = ({ currentPage, totalPages, onPageChange }) => {
  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  const handlePrevious = () => {
    if (hasPreviousPage) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (hasNextPage) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
      {totalPages !== 0 && (
        <ol className="flex justify-end gap-1 text-xs font-medium">
          <li>
            <button
              disabled={!hasPreviousPage}
              className={`inline-flex size-8 items-center justify-center rounded border border-gray-100 ${hasPreviousPage ? 'bg-white text-gray-900' : 'bg-gray-200 text-gray-500'
                }`}
              onClick={handlePrevious}
            >
              <span className="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
          <li>
            <ol className="flex gap-1 text-xs font-medium">
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index}>
                  <button
                    className={`inline-flex size-8 items-center justify-center rounded border border-gray-100 ${index + 1 === currentPage
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-900'
                      }`}
                    onClick={() => onPageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ol>
          </li>

          <li>
            <button
              disabled={!hasNextPage}
              className={`inline-flex size-8 items-center justify-center rounded border border-gray-100 ${hasNextPage ? 'bg-white text-gray-900' : 'bg-gray-200 text-gray-500'
                }`}
              onClick={handleNext}
            >
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
        </ol>
      )}
    </div>
  );
};

export default PageAble;
