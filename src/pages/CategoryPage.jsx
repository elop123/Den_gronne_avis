import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MainSeparator } from '../components/Separator/MainSeparator'
import { CategoryMenu } from '../components/CategoryMenu/CategoryMenu'
import { ProductByCategory } from '../components/ProductByCategory/ProductByCategory'
import { Grid } from '../components/Grid/Grid'

export const CategoryPage = () => {


  return (
    <>
    <MainSeparator />
    <Grid columns="1fr 3fr" gap="20px" alignItems="start" >
      <aside>
      <CategoryMenu />
      </aside>
    <ProductByCategory/>
    </Grid>
    </>
  )
}
