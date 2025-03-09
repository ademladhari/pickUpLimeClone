import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page) => {
    console.log(page)
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center justify-center mt-10 mb-[10%] ">
      <span className="text-gray-700 mr-2">Page</span>
      <button 
        className="mx-1 px-2 py-1 text-gray-700 bg-[#efefef]"
        onClick={() => handlePageClick(1)}
        disabled={currentPage === 1}
      >
        {"<<"}
      </button>
      <button 
        className="mx-1 px-2 py-1 text-gray-700 bg-[#efefef]"
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {'<'}
      </button>
      
      <span className="mx-2 text-gray-700 border border-green-500 rounded-md px-3 py-1">
        {currentPage}
      </span>
      
      <span className="text-gray-700">of {totalPages}</span>
      
      <button 
        className="mx-1 px-2 py-1 text-gray-700 bg-[#efefef]"
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {'>'}
      </button>
      
      <button 
        className="mx-1 px-2 py-1 text-gray-700 bg-[#efefef]"
        onClick={() => handlePageClick(totalPages)}
        disabled={currentPage === totalPages}
      >
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;
