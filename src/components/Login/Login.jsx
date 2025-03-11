import React, { useState } from 'react'
import style from './Login.module.scss'
import icon1 from '../../assets/icons/icons8-at-sign-50.png'
import icon2 from '../../assets/icons/icons8-secure-30.png'

export const Login = () => {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")


  return (
   <section className={style.loginBox}>
    <h2 className={style.title}>Velkommen tilbage</h2>
    <div className={style.loginOne}>
        <label htmlFor="" className={style.label}>Email</label>
        <div className={style.emailSection}>
        <input type="email"
            placeholder='Din email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className={style.loginInput} />
        <img src={icon1} alt="icon_sign" className={style.loginIcon}/>
        </div>
    </div>

    <div className={style.loginOne}>
        <label htmlFor="" className={style.label}>Password</label>
        <div className={style.passwordSection}>
        <input type="password"
            placeholder='Din password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className={style.loginInput} />
        <img src={icon2} alt="icon_secure" className={style.loginIcon}/>
        </div>
    </div>
    <button className={style.btnLogin}>Login</button>
    <p>Har du ikke allerede en konto? <a href="/signup">Klik her</a> 
    for at gå til sign up</p>

   </section>
  )
}
