import React from 'react'
import { useState, useContext } from 'react'
import { UserContext } from '../../context/userContext'

import style from './SignUp.module.scss'

export const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [error, setError] = useState('')
    const [isSignUp, setIsSignUp] = useState(true)
    const [message, setMessage] = useState('')
    const [isChecked, setIsChecked] = useState(false)

  const { userData, setUserData } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setMessage('')

    if (!email || !password || !firstname || !lastname || !address || !city || !zipcode) {
        setError("Alle felter skal udfyldes!");
        return
    }
    
    if (!isChecked) {
        setError("Du skal acceptere betingelserne for at fortsætte.")
        return
    }
    

   
    //Create request body (JSON format)
    const body = {
        firstname,
        lastname,
        email,
        password,
        address,
        city,
        zipcode
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': "application/json",
        Authorization: `Bearer ${userData?.access_token}`,
      },
    };


    try {
        const response = await fetch("http://localhost:4242/users", options);
        const data = await response.json();

        //console.log("Server Response:", data);

        if (response.ok) {
            setMessage("Du er tilmeld! ");
            setUserData(data.data);
            setError(""); 
            setEmail("");
            setPassword("");
            setFirstName("");
            setLastName("");
            setAddress("");
            setCity("");
            setZipcode("");
            setIsChecked(false); 
            //console.log(" Signup successful:", data);
        } else {
            setError(data.message || "Noget gik galt. Prøv igen.");
        }
    } catch (err) {
        setError("Der opstod en fejl. Prøv igen senere.");
    }
};


  return (
   <section className={style.signUpBox}>
    <h2 className={style.title}>Opret en konto</h2>
    {error && <p className={style.error}>{error}</p>}
    {message && <p className={style.success}>{message}</p>}

    {isSignUp &&(
    <form onSubmit={handleSubmit}>
    <div className={style.signUp}>
        <label htmlFor="email" className={style.label}>Email</label>
        <input type="email"
            placeholder='Din email...'
            id="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className={style.input} />
    </div>

    <div className={style.signUp}>
        <label className={style.label}>Password</label>
        <input type="password"
               id="password"
               placeholder='Din password...'
               value={password}
               onChange={(e)=>setPassword(e.target.value)}
               className={style.input} />
    </div>
    <div className={style.signUp}>
        <label className={style.label}>Fornavn</label>
        <input type="text"
               id="firstname"
               placeholder='Dit fornavn...'
               value={firstname}
               onChange={(e)=>setFirstName(e.target.value)}
            className={style.input} />
    </div>
    <div className={style.signUp}>
        <label className={style.label}>Efternavn</label>
        <input type="text"
               id="lastname"
               placeholder='Dit efternavn...'
               value={lastname}
               onChange={(e)=>setLastName(e.target.value)}
            className={style.input} />
    </div>
    <div className={style.signUp}>
        <label  className={style.label}>Addresse</label>
        <input type="text"
               id="address"
               placeholder='Din addresse...'
               value={address}
               onChange={(e)=>setAddress(e.target.value)}
            className={style.input} />
    </div>
    <div className={style.signUp}>
        <label className={style.label}>By</label>
        <input type="text"
               id="city"
               placeholder='Din by...'
               value={city}
               onChange={(e)=>setCity(e.target.value)}
            className={style.input} />
    </div>

    <div className={style.signUp}>
        <label className={style.label}>Postnummer</label>
        <input type="text"
               id="zipcode"
               placeholder='Dit postnummer...'
               value={zipcode}
               onChange={(e)=>setZipcode(e.target.value)}
            className={style.input} />
    </div>


    <p className={style.text}>Har du allerede en konto? Klik&nbsp;<a href="/login">her</a>&nbsp;
    for at vente tibage til login</p>
    <input type="checkbox"
           id="terms"
           checked={isChecked} 
           onChange={(e) => setIsChecked(e.target.checked)} />
    <p>
    Jeg har læst og forstået de gældende betingelser for oprettelse af kundekonto og brug af denne side
    </p>
    <button type='submit'className={style.btnOpen}>Opret</button>
    </form>
    )}
   </section>
  )
}
