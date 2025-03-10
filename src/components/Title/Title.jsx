import React from 'react'
import style from './Title.module.scss'

export const Title = ({title}) => {
  return (
   <p className={style.title}>{title}</p>
  )
}
