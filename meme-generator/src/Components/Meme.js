import React, { useState } from 'react';
import memesData from '../memesData';

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memeArray = allMemeImages.data.memes;
    const randomIndex = Math.floor(Math.random() * memeArray.length);
    setMeme(prevMeme => ({...prevMeme, randomImage: memeArray[randomIndex].url}));
  }

  return (
    <div className='container'>
      <div className='form'>
        <div className='form-inputs'>
          <input type="text" placeholder='Shut up' className='form-input-left'></input>
          <input type="text" placeholder='and take my money' className='form-input-right'></input>
        </div>
        <button onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
      <img src={meme.randomImage} className='meme-image'/>

    </div>
  )
}
