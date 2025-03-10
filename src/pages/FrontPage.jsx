import React from 'react'
import { ProductCard } from '../components/ProductCard/ProductCard'
import { CategoryCard } from '../components/CategoryCard/CategoryCard'
import { GreenSection } from '../components/GreenSection/GreenSection'
import { DonationCard } from '../components/DonationCard/DonationCard'
import style from '../style/FrontPage.module.scss'
import { Separator } from '../components/Separator/Separator'
import { Title } from '../components/Title/Title'

export const FrontPage = () => {
  return (
    <>
    <Separator />
    <Title title="Udvagte Produkter" />
    <ProductCard/>
    <GreenSection/>
    <CategoryCard />
    <DonationCard title="Donationer til Dato" 
                  text="Sammen med dig har vi siden starten indsamle"
                  sum="452.231,50 kr"
                  text2="Tak fordi du handler brugt, med omtanke for klimaet"/>
    <DonationCard title="Donationer i år"
                  text="Sammen med dig har vi i år indsamlet:"
                  sum="112.452,75 kr"
                  text2="Tak fordi du handler brugt, med omtanke for jorden" />
  </>
  )
}
