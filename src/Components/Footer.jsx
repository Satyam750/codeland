import React from 'react'
import "./footer.css"
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import image from "../assets/Logo.png"
const Footer = () => {
  return (
    <div className='Footer'>
    <div className='bink'> </div>
    <div className='item'>
    <div className='items1'>
       <h3>WHAT WE DO</h3>
        <ul>
            <li>MSW and Recycling</li>
            <li>Mediacal Waste Solutions</li>
            <li>Heathcare</li>
            <li>Hazardous Waste Sol.</li>
        </ul> 
    </div>
    <div className='items2'>
        <h3>WHO WE ARE</h3>
        <ul>
            <li>About Us</li>
            <li>Technologies</li>
            <li>Blog</li>
        </ul>
    </div>
    <div className='items3'>
        <h3>ACCESS</h3>
        <ul>
            <li>Contact Us Resources</li>
        </ul>
    </div>
    <div className='items4'>
        <h3>GET IN TOUCH</h3>
        <div className='data1'>
        <input type="text" placeholder='Name'/>
        <input type="text"  placeholder='Email'/>
        <button className='btn'>Get in Touch </button>
        </div>    
    </div>

    </div>

    <div className='last'>
        <div className='icons'>
        <FaSquareFacebook className='icon1'/>
        <FaXTwitter className='icon2'/>
        <FaInstagram className='icon3' />
        <FaLinkedin className='icon4' />
        </div>
        <div className='mid'>
            <img className='im3' src={image} alt="" />
            <p className='p12'>With Love From Bangalore!!</p>
            <p className='p13'>CodeLand InfoSolutions Pvt. Ltd. 2023</p>
        </div>
        <div className='end'>
            <p className='p12'>Terms of use</p>
            <p className='p12'>Privacy Policy</p>
        </div>
    </div>



    </div>
  )
}

export default Footer