import React from 'react';
import Header from './components/Header';
import Meme from './components/Meme';
import memeData from './memeData';
import './App.css';
import GeneratorForm from './components/GeneratorForm';

const App = () => {

  const memeArray = memeData.data.memes;
  const randomUrl = memeArray[Math.floor(Math.random() * memeArray.length)].url
  const [url, setUrl] = React.useState(randomUrl)
  const [upperText, setUpperText] = React.useState("")
  const [lowerText, setLowerText] = React.useState("")

  const getRandomMeme = (e) => {
    e.preventDefault();
    const randomUrl = memeArray[Math.floor(Math.random() * memeArray.length)].url
    setUrl(randomUrl)
  }

  const handleChange = (e) => {
    if (e.target.id === "upper") setUpperText(e.target.value);
    if (e.target.id === "lower") setLowerText(e.target.value);
  }


    return (
      <div className='container'>
        <Header/>
        <GeneratorForm
          handleChange={handleChange}
          handleClick={getRandomMeme}
        />
        <Meme
          url={url}
          upperText={upperText}
          lowerText={lowerText}
        />
      </div>
   
    )
  
}

export default App;
