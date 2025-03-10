import React from 'react'
import style from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer>
      <section>
        <h2>Nyhedsbrev</h2>
        <p>Vil du være med på den grønne front? Tilmeld dig vores nyhedsbrev og få 
          de seneste klima opdateringer direkte i din indbakke</p>
        <input type="email" />
        <button>Tilmeld</button>
      </section>
      <section>
        <h2>Kontakt</h2>
        <p>Redningen 32</p>
        <p>2210 Vinterby Øster</p>
        <p>+45 88229422</p>
        <p>dga@info.dk</p>
      </section>
      <section>
        <h2>FN´s Verdensmål</h2>
        <p>Vi støtter på organisatorisk plan op om FN´s verdensmål og har derfor 
          besluttet at en del af overskuddet går direkte til verdensmål nr. 13; Klimahandling</p>
          <a href="#" className={style.link}>Læs mere om verdensmålene her</a>
      </section>
        
    </footer>
  )
}
