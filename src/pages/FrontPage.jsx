import React from 'react'
import { ProductCard } from '../components/ProductCard/ProductCard'
import { CategoryCard } from '../components/CategoryCard/CategoryCard'
import { GreenSection } from '../components/GreenSection/GreenSection'
import { DonationCard } from '../components/DonationCard/DonationCard'
import style from '../style/FrontPage.module.scss'
import { Separator } from '../components/Separator/Separator'
import { Title } from '../components/Title/Title'
import img1 from '../assets/images/banner_image2.jpg'
import img2 from '../assets/images/banner_image3.jpg'
import { MainSeparator } from '../components/Separator/MainSeparator'

export const FrontPage = () => {
  return (
    <>
    <MainSeparator />
    <Title title="Udvagte Produkter" />
    <ProductCard/>
    <Separator />
    <GreenSection/>
    <Separator />
    <Title title="Populære Kategorier" />
    <CategoryCard />
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
