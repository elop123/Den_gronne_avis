import React from 'react'
import style from './GreenSection.module.scss'

export const GreenSection = () => {
  return (
    <section className={style.greenSection}>
        <h2 className={style.title}>Den Grønne Avis</h2>
        <p className={style.text}>Vi går forest i kampen om klimaet ved at give 2 kr. til klima-venlige formål, 
            hver gang du handler brugt på Den Grønne Avis</p>
    </section>
  )
}
