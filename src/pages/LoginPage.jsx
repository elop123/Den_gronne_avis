import React from 'react'
import { Login } from '../components/Login/Login'
import {Separator} from '../components/Separator/Separator'
import {DonationCard} from '../components/DonationCard/DonationCard'
import style from '../style/LoginPage.module.scss'
import img1 from '../assets/images/banner_image2.jpg'
import img2 from '../assets/images/banner_image3.jpg'


export const LoginPage = () => {
  return (
    <>
    <Login />
    <Separator />
    <div className={style.donationCards}>
       <DonationCard title="Donationer til Dato" 
                     text="Sammen med dig har vi siden starten indsamle"
                     sum="452.231,50 kr"
                     text2="Tak fordi du handler brugt, med omtanke for klimaet"
                     backgroundImage={img1} />
       <DonationCard title="Donationer i år"
                     text="Sammen med dig har vi i år indsamlet:"
                     sum="112.452,75 kr"
                     text2="Tak fordi du handler brugt, med omtanke for jorden"
                     backgroundImage={img2} />
       </div>
    </>
  )
}
