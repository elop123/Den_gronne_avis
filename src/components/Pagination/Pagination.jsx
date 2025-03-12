import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import style from './Pagination.module.scss'

export const Pagination = ({ currentPage, totalProducts, productsPerPage, onPageChange }) => {

const totalPages = Math.ceil(totalProducts / productsPerPage);
console.log(totalPages)

return (
  <section className={style.pagination}>
    {currentPage > 1 && (
    <button onClick={() => onPageChange(currentPage - 1)}>Forrige side</button>
  )}
  <span>{currentPage}/{totalPages}</span>
  {currentPage < totalPages && (
    <button onClick={() => onPageChange(currentPage + 1)}>Næste side</button>
  )}
  </section>
  );
};