import React from 'react'
import { useState, useEffect } from 'react'
import style from './ProductCard.module.scss'
import { Title } from '../Title/Title'

export const ProductCard = () => {
const[product, setProduct] = useState([])
const[error, setError] = useState(null)
const[loading, setLoading] = useState(true)

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
        console.log("Data:", data); 

        if (!data ) {
            setError("No products found");
          } else {
            setProduct(data.data); 
          }
        })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p className={style.error}>{error}</p>;
  }
    
  return (
    <section className={style.productCard}>
        
        {product.length > 0 ? (
                product.slice(0,6).map((item) => (
                <img key={item.id} 
                    className={style.product_img}
                     src={item.image} 
                     alt='product_img'></img> 
            ))
        ) : (
          <p>No product available</p>
        )}
    </section>
  )
}
