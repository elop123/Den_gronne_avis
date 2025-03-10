import React from 'react'

export const DonationCard = ({title, text, sum, text2}) => {
  return (
   <section>
    <h2>{title}</h2>
    <p>{text}</p>
    <p>{sum}</p>
    <p>{text2}</p>
    </section>
  )
}
