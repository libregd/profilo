
import { useState, useEffect } from "react"

import "./rq.css"

const baseUrl = 'https://api.quotable.io/random?minLength=100&maxLength=140'



const RadomQuote =() =>{
    const [content, setContent] =useState([]);
    const [author, setAuthor] = useState([])
    useEffect(() =>{
        updateQuote()
    },[])
    const updateQuote =async () => {
        const res = await fetch(baseUrl)
        const data = await res.json()
        setContent(data.content)
        setAuthor(data.author)
    }
    return (
        <div className="rq-box ">
            <div className="rq-card">
               <p className="rq-content">{content}</p> 
               <p className="rq-author">{author}</p>
               
            </div>
            <button onClick={updateQuote} className="rq-btn">Next</button>
            
        </div>
    )
}
export default RadomQuote