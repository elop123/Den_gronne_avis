import React, { useState } from 'react'
import style from './MessageInput.module.scss'


export const MessageInput = () => {
const[message, setMessage] = useState("")

const handleMessage = () => {
    console.log("Message:", message);
    setMessage(""); 
}

  return (
   <section className={style.messageSection}>
    <h2 className={style.messageTitle}>Kontakt sælger</h2>
    <textarea className={style.inputBox}
        placeholder="Skriv en besked til sælger..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}>
    </textarea>
    <button className={style.btnSend} onClick={handleMessage}>Send</button>
    </section>
  )
}
