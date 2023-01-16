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

  const [randomMeme, setRandomMeme] = React.useState({ 
    url: getRandomUrl(), 
    memeTexts: {
      upperText: "",
      lowerText:""
    },
  })

   const [texts, setTexts] = React.useState({ 
    upperText: "", 
    lowerText: "" 
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTexts((prevTexts) => {
      return {
        ...prevTexts,
        [name]: value
      }
    })
  }

  const handleClickApplyTexts = (e) => {
    e.preventDefault();
    setRandomMeme((prevMeme) => {
      return {
        ...prevMeme,
        memeTexts: texts
      }
    })
  }


  const getImage = (e) => {
    e.preventDefault();
    const newUrl = getRandomUrl();
    console.log(randomMeme)
    setRandomMeme((prevMeme) => {
      return {
        ...prevMeme,
        url: newUrl
      }
    })
  }


  return (
    <div className='container'>
      <Header />
      <GeneratorForm
        handleChange={handleChange}
        handleClickGetNewImage={getImage}
        handleClickApplyTexts={handleClickApplyTexts}
        formData={texts}
      />
      <Meme
        url={randomMeme.url}
        texts={randomMeme.memeTexts}
      />
    </div>

  )

}

export default App;
