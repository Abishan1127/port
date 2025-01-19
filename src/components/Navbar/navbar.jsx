import React from 'react'
import './navbar.css'
import logo from '../../assets/500x500.jpg'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='navbar'>
     <img src={logo} alt="logo" className='logo'  />
     <div className='desktopMenu'>
        <Link className='desktopMenuListItem'>Home</Link>
        <Link className='desktopMenuListItem'>About</Link>
        <Link className='desktopMenuListItem'>Skills</Link>
        <Link className='desktopMenuListItem'>Projects</Link>


     </div>
     <button className='desktopMenuBtn'>
        <span className=''>Contact Me</span>
     </button>


    </nav>
  )
}

export default Navbar
