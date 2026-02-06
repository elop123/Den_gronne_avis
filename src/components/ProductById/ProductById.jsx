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
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4242";

const url = `${API_BASE_URL}/products/${slug}`;

useEffect(() => {
    fetch(url)
    
      .then((res) => {
        if (!res.ok) {
          throw new Error("Kunne ikke hente produkter efter id");
        }
        return res.json();
      })
      .then((data) => {
       // console.log("Data:", data); 

        if (!data || !data.data ){
            setError("Ingen produkt fundet");

          } else {
            setProductById(data.data); 
            setComment(data.data.comments || [])
            //console.log(data.data)
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
    return <p>Ingen produk fundet</p>;
}
  return (
    <section className={style.productById}>
       
            <article key={productById.id} className={style.productStyle} >
                <img src={productById?.image || 'default-image.jpg'} 
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

 
