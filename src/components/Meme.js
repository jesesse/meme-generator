import React from "react";
import '../styles/meme.css'

const Meme = (props) => {

    return (
        <div className="meme-container">
            <img src={props.url} className="meme--img" alt="meme"/>
            <p className="upper-text">{props.upperText}</p>
            <p className="lower-text">{props.lowerText}</p>

        </div>
    )
}


export default Meme;