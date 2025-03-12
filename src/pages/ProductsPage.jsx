import React from 'react'
import { useState } from 'react'
import { AllCategory } from '../components/AllCategory/AllCategory'
import {Grid} from '../components/Grid/Grid'
import { CategoryMenu} from '../components/CategoryMenu/CategoryMenu'
import {MainSeparator} from '../components/Separator/MainSeparator'
import { Pagination } from '../components/Pagination/Pagination'

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  
  const startIndex = (currentPage-1) * itemsPerPage;
  const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

  return (
  <>
  <MainSeparator />
  <Grid columns="1fr 3fr" gap="20px" alignItems="start" >
  <aside>
  <CategoryMenu />
  </aside>
  <AllCategory products={currentItems} />
  </Grid>
  {totalProducts > 0 && (
  <Pagination totalPages={totalPages} currentPage={currentPage}  />
)}
  </>
  )
}


