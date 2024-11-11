import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="navbar">
      <div class="navbar-header">
        <i class="bi-list"></i>
        <Link to= "/"><img src="https://tinyurl.com/37vk7jzm" alt="logo"/></Link>
      </div>
      <ul class="navbar-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/power">Power</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/partners">Partners</Link></li>
        <li><Link to="/blogs">Media</Link></li>
        </ul>
    </div>  
  )
}

export default NavBar