import React, { useState } from 'react'
import style from './Footer.module.scss'

export const Footer = () => {
const [email, setEmail] = useState("")
const [error, setError] = useState("")
const [success, setSuccess] = useState("")

const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailPattern.test(email)
}

const handleSubmit = () => {
  setError('');
  setSuccess('');
  if (!email) {
  setError('Email må ikke være tom.')
  return
  }
  if (!validateEmail(email)) {
    setError('Indtast en gyldig emailadresse.');
    return;
  }
  setSuccess('Du er nu tilmeldt nyhedsbrevet!');
  setEmail('')

  setTimeout(() => {
    setSuccess('');
  }, 3000);
};

  return (
    <footer className={style.footer}>
      <section className={style.newsSection}>
        <h2 className={style.footerTitle}>Nyhedsbrev</h2>
        <p className={style.footerText}>Vil du være med på den grønne front? Tilmeld dig vores nyhedsbrev og få 
          de seneste klima opdateringer direkte i din indbakke</p>
        <div className={style.inputSection}>
        <input type="email" 
               className={style.newsInput}
               value={email}
               onChange={(e) => setEmail(e.target.value)}/>
        <button className={style.btnSignUp}onClick={handleSubmit}>Tilmeld</button>
        
        </div>
        {error && <p className={style.error}>{error}</p>}
        {success && <p className={style.success}>{success}</p>}
      </section>
      <section className={style.contactSection}>
        <h2 className={style.footerTitle}>Kontakt</h2>
        <p className={style.footerText}>Redningen 32</p>
        <p className={style.footerText}>2210 Vinterby Øster</p>
        <p className={style.footerText}>+45 88229422</p>
        <p className={style.footerText}>dga@info.dk</p>
      </section>
      <section className={style.worldSection}>
        <h2 className={style.footerTitle}>FN´s Verdensmål</h2>
        <p className={style.footerText}>Vi støtter på organisatorisk plan op om FN´s verdensmål og har derfor 
          besluttet at en del af overskuddet går direkte til verdensmål nr. 13; Klimahandling</p>
        <a href="https://www.verdensmaalene.dk/" className={style.link}>Læs mere om verdensmålene her</a>
      </section>
    </footer>
  )
}
