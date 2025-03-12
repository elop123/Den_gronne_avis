import React from 'react'
import { ProductById } from '../components/ProductById/ProductById'
import { MainSeparator } from '../components/Separator/MainSeparator'
import { CategoryMenu } from '../components/CategoryMenu/CategoryMenu'
import { Separator } from '../components/Separator/Separator'
import { MessageInput } from '../components/MessageInput/MessageInput'



export const ProductPageDetails = () => {

  return (
    <>
    <MainSeparator/>
    <CategoryMenu />
    <ProductById/>
    <Separator />
    <MessageInput/>

    </>
  )
}
