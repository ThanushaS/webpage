import React from 'react'

const Navbar = () => {
  return (
<div>
<nav className="navbar navbar-expand-lg navbar-dark"id='navbar'>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">SPICES</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false" >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#product">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
      <button className='btn p-2 my-lg-0 my-2'>Sign In</button>
    </div>
  </div>
</nav>
</div>
    
  )
}

export default Navbar
