import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import style from "./MyAnnounce.module.scss"; 

export const MyAnnounce = () => {
const [announce, setAnnounce] = useState([])
const { userData } = useContext(UserContext)


const navigate= useNavigate()


return (
    <section className={style.announceContainer}>
      <div className={style.tabCard}>
        <button className={style.whiteTab} onClick={()=>navigate('/myaccount')}>Min Profil</button>
        <button className={style.greenTab}>Mine Annoncer</button>
      </div>
      <div className={style.announceList}>
        {announce.length > 0 ? (
          announce.map((item) => (
            <div key={item.id} className={style.announceItem}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Pris: {item.price} kr</p>
              <img src={item.image} alt="announce_img" className={style.announceImg} />
            </div>
          ))
        ) : (
          <p className={style.noAnnounce}>Ingen annoncer oprettet</p>
        )}
      </div>
      <div className={style.announceForm}>
       <FiLogOut className={style.logoutBtn}  />
      </div>
    </section>
  )
}