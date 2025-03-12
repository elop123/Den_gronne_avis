import React from 'react'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/userContext'
import style from './SignUp.module.scss'

export const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [error, setError] = useState('')


  return (
   <section className={style.signUpBox}>
    <h2 className={style.title}>Opret en konto</h2>
    <form >
    <div className={style.signUp}>
        <label htmlFor="" className={style.label}>Email</label>
        <input type="email"
            placeholder='Din email...'
            value={email}
            // onChange={(e)=>setEmail(e.target.value)}
            className={style.input} />
    </div>

    <div className={style.signUp}>
        <label htmlFor="" className={style.label}>Password</label>
        <input type="password"
            placeholder='Din password...'
            value={password}
            //onChange={(e)=>setPassword(e.target.value)}
            className={style.input} />
    </div>
    <div className={style.signUp}>
        <label htmlFor="" className={style.label}>Fornavn</label>
        <input type="text"
            placeholder='Dit fornavn...'
            value={name}
            //onChange={(e)=>setPassword(e.target.value)}
            className={style.input} />
    </div>
    <div className={style.signUp}>
        <label htmlFor="" className={style.label}>Efternavn</label>
        <input type="text"
            placeholder='Dit efternavn...'
            value={lastname}
            //onChange={(e)=>setPassword(e.target.value)}
            className={style.input} />
    </div>
    <div className={style.signUp}>
        <label htmlFor="" className={style.label}>Addresse</label>
        <input type="text"
            placeholder='Din addresse...'
            value={address}
            //onChange={(e)=>setPassword(e.target.value)}
            className={style.input} />
    </div>
    <div className={style.signUp}>
        <label htmlFor="" className={style.label}>By</label>
        <input type="text"
            placeholder='Din by...'
            value={city}
            //onChange={(e)=>setPassword(e.target.value)}
            className={style.input} />
    </div>

    <div className={style.signUp}>
        <label htmlFor="" className={style.label}>Postnummer</label>
        <input type="text"
            placeholder='Dit postnummer...'
            value={zipcode}
            //onChange={(e)=>setPassword(e.target.value)}
            className={style.input} />
    </div>


    <p className={style.text}>Har du allerede en konto? Klik&nbsp;<a href="/signup">her</a>&nbsp;
    for at vente tibage til login</p>
    <input type="checkbox" />
    <p>
        Jeg har læst og 
    </p>
    <button type='submit'className={style.btnOpen}>Opret</button>
    </form>
   </section>
  )
}
