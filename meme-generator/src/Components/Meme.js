import React, { useState } from 'react';
import memesData from '../memesData';

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memeArray = memesData.data.memes;
    const randomIndex = Math.floor(Math.random() * memeArray.length);
    setMemeImage(memeArray[randomIndex].url);
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
      <img src={memeImage} className='meme-image'/>

    </div>
  )
}
