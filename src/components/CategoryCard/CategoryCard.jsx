import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './CategoryCard.module.scss'


export const CategoryCard = () => {
const[category,setCategory]= useState([]);
const[loading, setLoading] = useState(true);
const[error, setError] = useState(null);

const navigate = useNavigate()

const url=`http://localhost:4242/categories`;

useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Kunne ikke hente kategorier");
        }
        return res.json();
      })
      .then((data) => {
        //console.log("Data:", data); 

        if (!data || !data.data) {
            setError("Ingen kategorier fundet");
            setCategory([]);
          } else {
            setCategory(data.data); 
          }
        })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading category...</p>;
  }

  if (error) {
    return <p className={style.error}>{error}</p>;
  }

  return (
    <section className={style.categoryCard}>
        {category.length > 0 ? (
            category.slice(0,6).map((item) => (
            <article key={item.id} className={style.card} onClick={() => navigate(`/products/category/${item.slug}`)}>
                <p className={style.categoryTitle}>{item.name}</p>
                <img src={item.category_image} 
                     className={style.category_img}
                     alt="category_img" />
            </article> 
            ))
        ) : (
          <article>Ingen kategorier</article>
        )}
    </section>
  )
}
