import React, { useContext } from 'react'
import { useState } from 'react'
import { ProductById } from '../components/ProductById/ProductById'
import { MainSeparator } from '../components/Separator/MainSeparator'
import { CategoryMenu } from '../components/CategoryMenu/CategoryMenu'
import { Separator } from '../components/Separator/Separator'
import { MessageInput } from '../components/MessageInput/MessageInput'
import { Comment } from '../components/Comment/Comment'
import { UserContext } from '../context/userContext'
import { Grid } from '../components/Grid/Grid'



export const ProductPageDetails = () => {
const [comment, setComment] = useState([])
const {userData} = useContext(UserContext)

  return (
    <>
    <MainSeparator/>
    <Grid columns="1fr 2fr" gap="20px" alignItems="start" >
    <aside>
    <CategoryMenu />
    </aside>
    <ProductById setComment={setComment}/>
    </Grid>
    <Separator />
    {userData ? (
  <>
    <MessageInput /> 
    <Comment comment={comment} />
  </>
) : (
  <p className="message">Log ind for at skrive en besked</p>
)}
</>
  )
}
