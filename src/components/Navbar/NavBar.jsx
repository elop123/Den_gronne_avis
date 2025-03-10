import React from 'react'
import style from './NavBar.module.scss'
import icon1 from '../../assets/icons/icons8-important-mail-30.png';
import icon2 from '../../assets/icons/icons8-info-squared-30.png';
import icon3 from '../../assets/icons/icons8-test-account-30.png';
import { Category } from '../Category/Category';

export const NavBar = () => {
  return (
    <nav className={style.navigation}>
        <div className={style.logo}>
            <div className={style.greenSide}>Den Grønne</div>
            <span className={style.whiteSide}>Avis</span>
        </div>
        <div className={style.category}>
        <Category />
        <div className={style.announce}>
        <button className={style.button}>opret annonce</button>
        </div>
       
      <div className={style.icons}>
       <img src={icon1} alt="mail_icon" />
       <img src={icon2} alt="info_icon" />
       <img src={icon3} alt="account_icon" />
      </div>
      </div>
    </nav>
  )
}
