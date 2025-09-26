import React from 'react'
import bg from '../../assets/hero1.png';
import cart from '../../assets/cart.png';
import './intro.css';

import { Link } from 'react-scroll';

const Intro = () => {
  return (
  <section id="intro">
    <div className="introContent">
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className="introName">Barik</span><br/>Website Designer</span>
        <p className="introPara">I am a skilled web designer with experience in creating visually<br/>appealing and user-friendly websites.</p>
        <Link><button className="btn"><img src={cart} alt="hire" className='btnImg' />Hire Me</button></Link>
    </div>
    <img src={bg} alt="profile" className='bg'/>
  </section>
  )
}

export default Intro