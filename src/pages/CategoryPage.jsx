import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MainSeparator } from '../components/Separator/MainSeparator'
import { CategoryMenu } from '../components/CategoryMenu/CategoryMenu'
import { ProductByCategory } from '../components/ProductByCategory/ProductByCategory'

export const CategoryPage = () => {


  return (
    <>
    <MainSeparator />
    <CategoryMenu />
    <ProductByCategory/>
    </>
  )
}
