import React from 'react'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Announce.module.scss'

export const Announce = () => {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [error, setError] = useState('')


return (
   <section className={style.announceBox}>
    <h2 className={style.title}>Opret ny announce</h2>
    <h3 className={style.subtitle}>Her kan du oprette en ny announce.</h3>
    <h3></h3>
    <form >
    <div className={style.announce}>
        <label htmlFor="" className={style.label}>Titel</label>
        <input type="text"
            placeholder='Titel på dit produkt...'
            value={title}
            // onChange={(e)=>setEmail(e.target.value)}
            className={style.input} />
    </div>

    <div className={style.announce}>
        <label htmlFor="" className={style.label}>Kategori</label>
        <input type="text"
            placeholder='Hvilken kategori tilhører dit produkt...'
            value={category}
            //onChange={(e)=>setPassword(e.target.value)}
            className={style.input} />
    </div>
    <div className={style.announce}>
        <label htmlFor="" className={style.label}>Announce text</label>
        <textarea name="" id=""  
                  placeholder='Skriv en announce tekst her der beskriver produktet...'
                  className={style.input}>
        </textarea>
    </div>
    <div className={style.announce}>
        <label htmlFor="" className={style.label}>URL til billede</label>
        <input type="text"
            placeholder='Har du et billede som ligger på nettet kan du indsætte un URL her...'
            //value={lastname}
            //onChange={(e)=>setPassword(e.target.value)}
            className={style.input} />
    </div>
    <div className={style.announce}>
        <label htmlFor="" className={style.label}>Pris</label>
        <input type="text"
            placeholder='Pris...'
            
            //onChange={(e)=>setPassword(e.target.value)}
            className={style.input} />
    </div>
    <button type='submit'className={style.btnOpen}>Opret</button>
    </form>
   </section>
  )
}
