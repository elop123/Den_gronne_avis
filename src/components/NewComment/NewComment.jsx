import React, { useState } from 'react'
import style from './NewComment.module.scss'
import { UserContext } from '../../context/userContext'
import { useContext } from 'react'

export const NewComment = ({productId, updateComments}) => {
const [newComment, setNewComment] = useState("")
const [isWriting, setIsWriting] = useState(false)
const [error, setError] = useState("")
const [message, setMessage] = useState("")

const { userData } = useContext(UserContext);

const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setMessage('')

if (!newComment) {
    setError("Du skal udfylde!");
    return
}
    
//Create request body (JSON format)
    const body = {
        comment: newComment
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': "application/json",
        Authorization: `Bearer ${userData?.access_token}`,
      },
    };


    try {
        const response = await fetch("http://localhost:4242/comment/${productId}", options);
        const data = await response.json();

        console.log("Server Response:", data);

        if (response.ok) {
            setMessage("Dit kommentarer tilføjet ");
            setError(""); 
            setNewComment(""); 
            updateComments((prevComments) => [...prevComments, data.data]); 
            console.log(" Comment added:", data);
        } else {
            setError(data.message || "Noget gik galt. Prøv igen.");
        }
    } catch (err) {
        setError("Der opstod en fejl. Prøv igen senere.");
    }
};


return (
    <section className={style.commentBox}>
        {error && <p className={style.error}>{error}</p>}
        {message && <p className={style.success}>{message}</p>}

    
        <form onSubmit={handleSubmit}>
            <div className={style.newComment}>
                <input type="text"
                    placeholder='Din kommentar her...'
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className={style.input} />
            </div>
            <button type="submit" className={style.btn}>Send</button> 
        </form>
    </section>
);
};