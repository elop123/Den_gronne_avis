import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './ProductById.module.scss'
import { Comment } from '../Comment/Comment';

export const ProductById = ({setComment}) => {
const [productById, setProductById] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const {slug} = useParams();

const url = `http://localhost:4242/products/${slug}`;

useEffect(() => {
    fetch(url)
    
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch product by id");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Data:", data); 

        if (!data || !data.data ){
            setError("No product found");

          } else {
            setProductById(data.data); 
            setComment(data.data.comments || [])
            console.log(data.data)
          }
        })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [slug, setComment]);

  if (loading) {
    return <p>Loading product by id...</p>;
  }

  if (error) {
    return <p className={style.error}>{error}</p>;
  }

  if (!productById) {
    return <p>No product details available</p>;
}
  return (
    <section className={style.productById}>
       
            <article key={productById.id} className={style.productStyle} >
                <img src={productById?.image} 
                     className={style.productImg}
                     alt="product_img" />
                <h3 className={style.productTitle}>{productById?.name}</h3>
                <p className={style.productDescription}>{productById?.description}</p>
                <p className={style.productPrice}>Pris: {productById?.price} kr</p>
            </article> 
            {/* <Comment comments={productById?.comments} /> */}
    </section>
  )
}

 
