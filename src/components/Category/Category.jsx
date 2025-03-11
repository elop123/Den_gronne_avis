import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Category.module.scss'


export const Category = () => {
const[category,setCategory]= useState([]);
const[loading, setLoading] = useState(true);
const[error, setError] = useState(null);

const navigate= useNavigate();

const url=`http://localhost:4242/categories`;

useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch categories");
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

  const handleCategory =(e)=>{
    const selectedSlug= e.target.value

  if (selectedSlug !== 'category' && selectedSlug !== 'all') {
  navigate(`products/category/${selectedSlug}`);
  }
  }

  return (
    <section className={style.category}>
            <select className={style.dropdown} onChange={handleCategory}>
                <option value="category">Vælg kategori</option>
                <option value="all">Alle kategori</option>
                {category.length > 0 ? (
                 category.map((item) => (
                <option key={item.id} value={item.slug}>{item.name}</option> 
            ))
        ) : (
          <option>No categories available</option>
        )}
        </select>
    </section>
  )
}
