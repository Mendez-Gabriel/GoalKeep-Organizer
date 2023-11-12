import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ totalPages, setUrlApi, baseApi }) => {

    const handlePageClick = (event) => {
        setUrlApi(`${baseApi}page=${event.selected+1}`);
    }

  return (
    <div>
        <ReactPaginate
            pageCount={totalPages}
            className='pagination'
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            pageClassName='page-item'
            pageLinkClassName='page-link'
            containerClassName='Page navigation example'
            previousClassName='page-item'
            nextClassName='page-item'
            previousLinkClassName='page-link'
            nextLinkClassName='page-link'
            activeClassName='active'
        />
    </div>
  )
}

export default Pagination;