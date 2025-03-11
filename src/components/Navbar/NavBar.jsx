import React from 'react'
import style from './NavBar.module.scss'
import icon1 from '../../assets/icons/icons8-important-mail-30.png';
import icon2 from '../../assets/icons/icons8-info-squared-30.png';
import icon3 from '../../assets/icons/icons8-test-account-30.png';
import { Category } from '../Category/Category';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className={style.navigation}>
         <NavLink to="/" className={style.logo}>
            <div className={style.greenSide}>Den Grønne</div>
            <div className={style.whiteSide}>Avis</div>
        </NavLink>
        <div className={style.category}>
        <Category />
        <NavLink to="/announce"><div className={style.announce}>
        <button className={style.button}>opret annonce</button>
        </div>
        </NavLink>
      <div className={style.navIcons}>
       <img src={icon1} alt="mail_icon" />
       <img src={icon2} alt="info_icon" />
       <img src={icon3} alt="account_icon" />
      </div>
      </div>
    </nav>
  )
}
