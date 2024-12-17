import React from 'react';
import './intro.css';
import bg from '../../assets/bg.png'
import {Link} from 'react-scroll'
const Intro = () => {
  return (
  <section id="intro">
    <div className="introContent">
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Abishan <br /></span>Web Developer</span>
        <p   className='introPara'>I am a skilled web developer with experience in creating <br /> visualy appealing and user friendly websites.</p>
   <Link> <button className='btn'>Hire me</button></Link>
    </div>
    <img src={bg} alt="" className='bg'/>
  </section>
  )
}

export default Intro;
