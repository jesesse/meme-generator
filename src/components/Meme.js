import React from "react";
import '../styles/meme.css'

const Meme = (props) => {

    const[url, setUrl] = React.useState("");

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res=>res.json())
            .then(data=>{
                let ran = Math.floor(Math.random() * data.data.memes.length)
                setUrl(data.data.memes[ran].url)
            })

    }, [props.url])


    return (
        <div className="meme-container">
            <img src={url} className="meme--img" alt="meme"/>
            <p className="upper-text">{props.texts.upperText}</p>
            <p className="lower-text">{props.texts.lowerText}</p>
        </div>
    )
}


export default Meme;