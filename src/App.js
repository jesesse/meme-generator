import React from 'react';
import Header from './components/Header';
import Meme from './components/Meme';
import memeData from './memeData';
import './App.css';
import GeneratorForm from './components/GeneratorForm';

const App = () => {

  const memeArray = memeData.data.memes;
  const getRandomUrl = () => {
    return memeArray[Math.floor(Math.random() * memeArray.length)].url
  }

  const [randomMeme, setRandomMeme] = React.useState({ url: getRandomUrl(), upperText: "", lowerText: "" })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRandomMeme((prevRandomMeme) => {
      return {
        ...prevRandomMeme,
        [name]: value
      }
    })
  }

  const generateMeme = (e) => {
    e.preventDefault();
    const newUrl = getRandomUrl();
    setRandomMeme((prevRandomMeme) => {
      return {
        ...prevRandomMeme,
        url: newUrl
      }
    })
  }


  return (
    <div className='container'>
      <Header />
      <GeneratorForm
        handleChange={handleChange}
        handleClick={generateMeme}
        formData={randomMeme}
      />
      <Meme
        url={randomMeme.url}
        upperText={randomMeme.upperText}
        lowerText={randomMeme.lowerText}
      />
    </div>

  )

}

export default App;
