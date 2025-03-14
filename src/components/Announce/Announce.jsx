import React from 'react'
import { useState,useEffect, useContext } from 'react'
import { UserContext } from '../../context/userContext'
import style from './Announce.module.scss'

export const Announce = () => {
const [title, setTitle] = useState("")
const [category, setCategory] = useState("")
const [description, setDescription] = useState("")
const [url, setUrl] = useState("")
const [price, setPrice] = useState("")
const [error, setError] = useState('')
const [isWriting, setIsWriting] = useState(true)
const [message, setMessage] = useState('')
const [categories, setCategories] = useState([])
  
const { userData, setUserData } = useContext(UserContext);

// Fetch categories from API
useEffect(() => {
    fetch("http://localhost:4242/categories")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) {
        setCategories(data.data);
        } else {
        setCategories([]);
        }
    })
      .catch(() => setError("Kunne ikke hente kategorier."));
}, [])


  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setMessage('')

    if (!title || !category || !description || !price ) {
        setError("Alle felter skal udfyldes!");
        return
    }
     
    //Create request body (JSON format)
    const body = {
        name: title,  
        image: url,  
        description, 
        price, 
        category_id: category  
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': "application/json",
        Authorization: `Bearer ${userData?.access_token}`,
      },
    };


    try {
        const response = await fetch("http://localhost:4242/products", options);
        const data = await response.json();

       // console.log("Server Response:", data);

        if (response.ok) {
            setMessage("Din announce er offentliggjort! ");
            setUserData(data.data)
            setError(""); 
            setTitle("");
            setUrl("");
            setCategory("");
            setDescription("");
            setPrice("");
            //console.log(" Announce is published:", data);
        } else {
            setError(data.message || "Noget gik galt. Prøv igen.");
        }
    } catch (err) {
        setError("Der opstod en fejl. Prøv igen senere.");
    }
};




return (
   <section className={style.announceBox}>
    <h2 className={style.title}>Opret ny announce</h2>
    <h3 className={style.subtitle}>Her kan du oprette en ny announce.</h3>
    <h3 className={style.subtitle}>Du har mulighed for at slette dine annoncer igen under “min konto” siden</h3>
    {error && <p className={style.error}>{error}</p>}
    {message && <p className={style.success}>{message}</p>}

    {isWriting &&(
        <form onSubmit={handleSubmit}>
    <div className={style.announce}>
        <label className={style.label}>Titel</label>
        <input type="text"
               placeholder='Titel på dit produkt...'
               value={title}
               onChange={(e)=>setTitle(e.target.value)}
            className={style.input} />
    </div>

    <div className={style.announce}>
    <label className={style.label}>Kategori</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={style.input}
          >
            <option value="">Vælg en kategori</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
    </div>
    <div className={style.announce}>
        <label className={style.label}>Announce text</label>
        <textarea name="text" id="text" 
                  value={description} 
                  placeholder='Skriv en announce tekst her der beskriver produktet...'
                  onChange={(e)=>setDescription(e.target.value)}
                  className={style.input} style={{resize:'none'}}>
        </textarea>
    </div>
    <div className={style.announce}>
        <label className={style.label}>URL til billede</label>
        <input type="text"
               id="url"
               placeholder='Har du et billede som ligger på nettet kan du indsætte un URL her...'
               value={url }
               onChange={(e)=>setUrl(e.target.value)}
            className={style.input} />
    </div>
    <div className={style.announce}>
        <label className={style.label}>Pris</label>
        <input type="text"
               placeholder='Pris...'
               id="price"
               value={price}
               onChange={(e)=>setPrice(e.target.value)}
            className={style.input} />
    </div>
    <button type='submit'className={style.btnOpen}>Opret</button>
    </form>
    )}
   </section>
  )
}
