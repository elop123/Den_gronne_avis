import React from 'react'
import style from '../style/NotFoundPage.module.scss'

export const NotFoundPage = () => {
  return (
    <div>
        <p className={style.error}>404 ERROR</p>
        <p className={style.error}>Siden er ikke fundet</p></div>
  )
}
