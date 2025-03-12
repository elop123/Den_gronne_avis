import React from 'react'
import { AllCategory } from '../components/AllCategory/AllCategory'
import {Grid} from '../components/Grid/Grid'
import { CategoryMenu} from '../components/CategoryMenu/CategoryMenu'
import {MainSeparator} from '../components/Separator/MainSeparator'


export const ProductsPage = () => {
 
  return (
  <>
  <MainSeparator />
  <Grid columns="1fr 3fr" gap="20px" alignItems="start" >
  <aside>
  <CategoryMenu />
  </aside>
  <AllCategory />
  </Grid>
  </>
  )
}


