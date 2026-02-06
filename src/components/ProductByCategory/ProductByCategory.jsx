import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import style from './ProductByCategory.module.scss'

export const ProductByCategory = () => {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const {slug} = useParams();

const navigate= useNavigate();
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4242";

const url = `${API_BASE_URL}/products/category/${slug}`;

useEffect(() => {
    fetch(url)
    
      .then((res) => {
        //console.log("Response:", res.status);
        if (!res.ok) {
          throw new Error("Kunne ikke hente produkter efter kategori");
        }
        return res.json();
      })
      .then((data) => {
        //console.log("Data:", data); 

        if (!data ||!Array.isArray(data.data) || data.data.length === 0){
            setError("ingen produkt fundet");
            setProducts([])
          } else {
            setProducts(data.data); 
            //console.log(data.data)
          }
        })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <p>Loading product by category...</p>;
  }

  if (error) {
    return <p className={style.error}>{error}</p>;
  }

  return (
    <section className={style.productByCategory}>
       
        {products.length > 0 ? (
            products.map((item) => (
            <article key={item.id} className={style.articleStyle} onClick={() => navigate(`/products/${item.slug}`)}>
                <div className={style.imageContainer}>
                <img src={item.image} alt="product_img" className={style.productImg}/>
                <div className={style.priceOverlay}>
                <p className={style.price}>Pris: {item.price} kr</p>
                </div>
                </div>
                <h3 className={style.productTitle}>{item.name}</h3>
                <p className={style.productDesc}>{item.description}</p>
            </article> 
            ))
        ) : (
          <article>Ingen produkt fundet</article>
        )}
    </section>
  )
}

 
