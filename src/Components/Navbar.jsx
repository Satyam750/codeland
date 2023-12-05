import React from 'react'
import logo from "../assets/Logo.png"
import "./navbar.css"
const Navbar = () => {
  return (
    <div className='Navbar'>
     <div className='logo-img'>
        <img src={logo} className='logo' alt="" />
     </div>
     <div className='nav-t'>
        <ul className='t'>
            <li className='list'>Home</li>
            <li className='list'>About Us</li>
            <li className='list'>Industries</li>
            <li className='list'>Technology</li>
            <li className='list'>Resources</li>
            <li className='list'>Contact</li>
        </ul>
     </div>
    </div>
  )
}

export default Navbar