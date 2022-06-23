import React from 'react'

export default function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={require(`../images/troll-face.png`)} />
        Meme Generator
      </div>
      <div className='header-title'>
        React Course - Project 3
      </div>
    </div>
  )
}
