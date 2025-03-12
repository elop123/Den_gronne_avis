import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from './CategoryMenu.module.scss'


export const CategoryMenu = () => {
const[categoryMenu,setCategoryMenu]= useState([]);
const[loading, setLoading] = useState(true);
const[error, setError] = useState(null);

const navigate = useNavigate();
const { slug } = useParams()

const url=`http://localhost:4242/categories`;

useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch catgory menu");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Data:", data); 

        if (!data ) {
            setError("No category meny found");
          } else {
            setCategoryMenu(data.data); 
          }
        })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading category menu...</p>;
  }

  if (error) {
    return <p className={style.error}>{error}</p>;
  }

  return (
    <section className={style.categoryMenu}>
            <h2 className={style.categoryTitle}><strong>Alle kategorier</strong></h2>
                {categoryMenu.length > 0 ? (
                 categoryMenu.map((item) => (
                <ul key={item.id}>
                    <li  className={`${style.categoryList} 
                    ${item.slug === slug ? style.activeCategory : ''}`}
                    onClick={() => navigate(`/products/category/${item.slug}`)}>{item.name}</li>
                </ul> 
            ))
        ) : (
          <p>No category menu available</p>
        )}
    </section>
  )
}
