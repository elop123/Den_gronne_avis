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

const url = `http://localhost:4242/products/category/${slug}`;

useEffect(() => {
    fetch(url)
    
      .then((res) => {
        console.log("Response:", res.status);
        if (!res.ok) {
          throw new Error("Failed to fetch product by category");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Data:", data); 

        if (!data ||!Array.isArray(data.data) || data.data.length === 0){
            setError("No product found");
            setProducts([])
          } else {
            setProducts(data.data); 
            console.log(data.data)
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
        <h2>Products in Category: {slug}</h2>
        {products.length > 0 ? (
            products.map((item) => (
            <article key={item.id}  onClick={() => navigate(`/products/${item.slug}`)}>
                <img src={item.image} alt="product_img" />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.price} DKK</p>
            </article> 
            ))
        ) : (
          <article>No products available</article>
        )}
    </section>
  )
}

 
