import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <header>
        <div class="header">
            <i class="bi-list" id="bi-list"></i>
            <Link to= "/"><img src="https://tinyurl.com/37vk7jzm" alt="logo"/></Link>
        </div>
        <div class="nav" id="nav">
            <i class="bi-x" id="bi-x"></i>
            <ul>
                <li><Link to="/"></Link>Home</li>
                <li><Link to="/about"></Link>About</li>
                <li><Link to="/power"></Link>Power</li>
                <li><Link to="/services"></Link>Services</li>
                <li><Link to="/partners"></Link>Partners</li>
                <li><Link to="/blogs"></Link>Media</li>
            </ul>
        </div>
    </header>
  )
}

export default NavBar