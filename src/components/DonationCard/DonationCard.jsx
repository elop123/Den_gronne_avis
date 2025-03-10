import React from 'react'
import style from './DonationCard.module.scss'

export const DonationCard = ({title, text, sum, text2, backgroundImage}) => {
  return (
   <section className={style.donationSection} style={{ backgroundImage: `url(${backgroundImage})` }}>
    <h2 className={style.title}>{title}</h2>
    <p className={style.subtitle}>{text}</p>
    <p className={style.sum}>{sum}</p>
    <p className={style.subtext}>{text2}</p>
    </section>
  )
}
