import React, { useState, useContext } from 'react'
import { UserContext } from '../../context/userContext'
import  { useNavigate } from 'react-router-dom' 
import style from './Login.module.scss'
import icon1 from '../../assets/icons/icons8-at-sign-50.png'
import icon2 from '../../assets/icons/icons8-secure-30.png'

export const Login = () => {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState('')

// Destructure setUserData from UserContext
const { setUserData } = useContext(UserContext);
const navigate = useNavigate();
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4242";

const handleLogin = async (e) => {
  e.preventDefault();

const url= `${API_BASE_URL}/login`;

if (!email) {
    setError('Indtast din email');
    return;
  }
  if (!password) {
    setError('Indtast dit password');
    return;
  }

  // Create URLSearchParams with username and password
  let body = new URLSearchParams();
  body.append('username', email);
  body.append('password', password);

  // Set options for the fetch request
  let options = {
    method: 'POST',
    body: body,
  };

  fetch(url, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Forkert email eller adgangskode')
      }
      return res.json();
    })
    .then((data) => {
      // Check if the access_token exists in the response
      if (data.data?.access_token) {
        setUserData(data.data);
        setError('');
        navigate('/myaccount');
      } else {
        setError('Forkert email eller adgangskode');
       
      }
    })
    .catch((err) => {
      setError(err.message || 'Der opstod en fejl');
     
    });
};

  return (
   <section className={style.loginBox}>
    <h2 className={style.title}>Login</h2>
    <form onSubmit={handleLogin}>
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
    <p className={style.text}>Har du ikke allerede en konto? Klik&nbsp;<a href="/signup">her</a>&nbsp;
    for at gå til sign up</p>
    <button type='submit'className={style.btnLogin}>Login</button>
    </form>

   </section>
  )
}
