import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import style from "./MyProfile.module.scss"; 

export const MyProfile = () => {
const [profile, setProfile] = useState({
    email: " ",
    password: " ",
    firstName: "",
    lastName: "",
    address: "",
    zipcode: "",
    city: " "
  });
  const { userData, logout } = useContext(UserContext)
  const navigate= useNavigate()

const handleChange = (e) => {
    const { name, value, type } = e.target;
    setProfile() }

const handleDelete = ()=>{
    setProfile("")
}

return (
    <section className={style.profileContainer}>
      <div className={style.tabCard}>
        <button className={style.greenTab}>Min Profil</button>
        <button className={style.whiteTab}>Mine Annoncer</button>
      </div>
      <div className={style.profileForm}>
        <div className={style.leftSection}>
          <label className="label">Fornavn</label>
          <input type="text" 
                 name="firstName" 
                 value={profile.firstName} 
                 onChange={handleChange} 
                 placeholder="Dit navn..."
                 className="input" />
          <label>Efternavn</label>
          <input type="text" 
                 name="lastName" 
                 value={profile.lastName} 
                 onChange={handleChange} 
                 placeholder="Dit efternavn..." />
          <label>Adresse</label>
          <input type="text" 
                 name="address" 
                 value={profile.address} 
                 onChange={handleChange} 
                 placeholder="Din adresse..." />
          <label>Postnummer</label>
          <input type="text" 
                 name="postalCode" 
                 value={profile.postalCode} 
                 onChange={handleChange} 
                 placeholder="Dit postnummer..." />
          <label>Telefon</label>
          <input type="text" 
                 name="phone" 
                 value={profile.phone} 
                 onChange={handleChange} 
                 placeholder="Dit telefon nummer..." />
          <label>Email</label>
          <input type="email" 
                 name="email" 
                 value={profile.email} 
                 onChange={handleChange} 
                 placeholder="Din email adresse..." />
        </div>
        <div className={style.rightSection}>
          <label>
            <input type="checkbox" 
                   name="receiveNews" 
                   onChange={handleChange} />
            Jeg ønsker at modtage nyheder om klima-indsatsen, gode tilbud, eksklusive deals og lignende promoverings-mails fra den grønne avis og samarbejdspartnere?
          </label>
          <label>
            <input type="checkbox" 
                   name="receiveNotifications" 
                   onChange={handleChange} />
            Jeg ønsker at modtage notifikationer i form af emails når der sker en opdatering på en af mine annoncer eller jeg modtager en ny henvendelse?
          </label>
          <div className={style.buttons}>
            <button className={style.deleteBtn} onClick={handleDelete}>slet profil</button>
            <button className={style.saveBtn} >gem ændringer</button>
            <FiLogOut className={style.logoutBtn} onClick={() => { logout(); navigate("/"); }}/>
          </div>
        </div>
      </div>
    </section>
  )
}
