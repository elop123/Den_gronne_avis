import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import style from './Pagination.module.scss'

export const Pagination = ({ totalPages, setCurrentPage }) => {


  return (
    <section>
        <ReactPaginate
        previousLabel={"Forrige side"} 
        nextLabel={"Næste side"}        
        breakLabel={"..."}
        totalPages={totalPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={(event) => onPageChange(event.selected + 1)}
        containerClassName={style.pagination}
        activeClassName={style.active}
       
    />
    </section>
  )
}
