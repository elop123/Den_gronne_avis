import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import style from './Pagination.module.scss'

export const Pagination = ({ pageCount, currentPage, setCurrentPage }) => {


const handlePageClick = ({ selected }) => {
  setCurrentPage(selected);
};

  return (
    <section>
        <ReactPaginate
        previousLabel={"Forrige side"} 
        nextLabel={"Næste side"}        
        breakLabel={"1/3"}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={style.pagination}
        activeClassName={style.active}
       
    />
    </section>
  )
}
