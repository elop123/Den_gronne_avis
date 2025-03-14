import React from 'react'
import { useState, useEffect } from 'react'
import style from './AllCategory.module.scss'
import { useNavigate } from 'react-router-dom'
import ReactPaginate from 'react-paginate'


export const AllCategory = () => {
const[product, setProduct] = useState([])
const[error, setError] = useState(null)
const[loading, setLoading] = useState(true)
const [currentPage, setCurrentPage] = useState(0)
const productsPerPage = 9

const navigate = useNavigate()

const url = `http://localhost:4242/products`;

useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
       // console.log("Data:", data); 

        if (!data || !data.data||!Array.isArray(data.data)|| data.data.length === 0) {
            setError("Ingen produkter fundet");
            setProduct([]);
          } else {
            setProduct(data.data); 
            setError(null);
          }
        })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Indlæser produkter...</p>;
  }

  if (error) {
    return <p className={style.error}>{error}</p>;
  }
  if (product.length === 0) {
    return <p className={style.noProducts}>Ingen produkter </p>;
  }
    
  const totalProducts = product.length;
  const pageCount = Math.ceil(totalProducts / productsPerPage)

  const currentItems = product.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  )
  
   const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  }

  return (
    <section className={style.allCategory}>
          {currentItems.length > 0 ? (
        currentItems.map((item) => (
              <article key={item.id} className={style.all} onClick={() => navigate(`/products/${item.slug}`)}>
                <div className={style.imageContainer}>
                <img key={item.id} 
                    className={style.productImg}
                    src={item.image} 
                    alt='product_img'></img> 
                  <div className={style.priceOverlay}>
                  <p className={style.price}>Pris: {item.price} kr</p>
                  </div>
                </div>
                <h3 className={style.productTitle}>{item.name}</h3>
                <p className={style.productDesc}>{item.description}</p>
              </article>
            ))
        ) : (
          <p>Ingen produkter</p>
        )}
           {totalProducts > productsPerPage && (
        <ReactPaginate
          previousLabel={"Forrige"}
          nextLabel={"Næste"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={style.pagination}
          activeClassName={style.activePage}
          previousClassName={style.pageBtn}
          nextClassName={style.pageBtn}
          disabledClassName={style.disabledPage}
          breakClassName={style.breakPage}
        />
      )}
    </section>
  )
}
