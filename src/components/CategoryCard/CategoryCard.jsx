import React from 'react'
import { useState, useEffect } from 'react'
import style from './CategoryCard.module.scss'
import { Title } from '../Title/Title';


export const CategoryCard = () => {
const[category,setCategory]= useState([]);
const[loading, setLoading] = useState(true);
const[error, setError] = useState(null);

const url=`http://localhost:4242/categories`;

useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch catgories");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Data:", data); 

        if (!data || !data.data) {
            setError("No categories found");
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
    <section>
          <Title title="Populære kategorier" />
        {category.length > 0 ? (
            category.slice(0,6).map((item) => (
            <article key={item.id}>
                <p>{item.name}</p>
                <img src={item.category_image} alt="category_img" />
            </article> 
            ))
        ) : (
          <article>No categories available</article>
        )}
    </section>
  )
}
