import React from 'react'

export default function Meme() {
  return (
    <div className='container'>
      <form >
        <div className='form-inputs'>
          <input type="text" placeholder='Shut up' className='form-input-left'></input>
          <input type="text" placeholder='and take my money' className='form-input-right'></input>
        </div>
        <button>Get a new meme image 🖼</button>
      </form>

    </div>
  )
}
