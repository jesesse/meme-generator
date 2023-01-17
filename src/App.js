import React from 'react';
import Header from './components/Header';
import Meme from './components/Meme';
import './App.css';
import GeneratorForm from './components/GeneratorForm';

const App = () => {


  const [randomMeme, setRandomMeme] = React.useState({ 
    url: "", 
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

  const handleClickApplyImage = (e) =>{
    e.preventDefault()
    setRandomMeme(prevMeme => {
      return {
        ...prevMeme,
        url: new Date().getTime()
      }
    })
  }




  return (
    <div className='container'>
      <Header />
      <GeneratorForm
        handleChange={handleChange}
        handleClickApplyTexts={handleClickApplyTexts}
        handleClickApplyImage={handleClickApplyImage}
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
