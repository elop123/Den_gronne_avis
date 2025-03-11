import React from 'react'
import style from './Grid.module.scss'

export const Grid = ({ columns, gap, alignItems, children }) => {
  return (
    <section className={style.gridLayout} 
    style={{ gridTemplateColumns: columns, gap, alignItems }}>
    {children}
  </section>
  )
}
