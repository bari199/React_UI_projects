import React from 'react'
import './navbar.css';
import logo from '../../assets/log.png';
import contactImg from '../../assets/contactImg.png'
import {Link} from 'react-scroll';


const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">Abouts</Link>
            <Link className="desktopMenuListItem">Portfolio</Link>
            <Link className="desktopMenuListItem">Clients</Link>
        </div>
        <button className="desktopMenuBtn">
            <img src={contactImg} alt="contactImg" className="desktopMenuImg" />Contacts
        </button>

    </nav>
  )
}

export default Navbar