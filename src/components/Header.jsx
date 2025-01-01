import React from 'react'
import myImage from "../assets/images/avataaars.svg";

export default function Header() {
  return (
    
    <header className="header-container">
      <img src= {myImage} className="header-image"  />
      <h1 className="heading-header ">Start Bootstrap</h1>
      <p className="para-header ">Graphic Artist - Web Designer - Illustrator</p>
    </header>
  )
}
