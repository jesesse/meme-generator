import React from "react";
import '../styles/header.css'

class Header extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="header">
                <img className="header--logo" src="https://media.wired.co.uk/photos/607d91994d40fbb952b6ad64/4:3/w_2664,h_1998,c_limit/wired-meme-nft-brian.jpg" alt="logo"></img>
                <h1 className="header--title">Meme Generator</h1>
                <h4 className="header--sub-title"> React Course - Project 3</h4>
            </div>
        )
    }
}

export default Header;