import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    
<nav className="navbar navbar-expand-lg  ">
  <div className="container ">
    <a className="navbar-brand text-white fs-2 fw-bold " href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to ={'/portfolio'}>Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to ={'/about'} >About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to ={'/contact'}>Contact</Link>
        </li>
      </ul>

    </div>
  </div>
</nav>

  )
}
