import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import style from "./MyAnnounce.module.scss"; 

export const MyAnnounce = () => {
const [announce, setAnnounce] = useState("")

const navigate= useNavigate()


return (
    <section className={style.announceContainer}>
      <div className={style.tabCard}>
        <button className={style.whiteTab} onClick={()=>navigate('/myaccount')}>Min Profil</button>
        <button className={style.greenTab}>Mine Annoncer</button>
      </div>
      <div className={style.announceForm}>
       <FiLogOut className={style.logoutBtn}  />
      </div>
    </section>
  )
}