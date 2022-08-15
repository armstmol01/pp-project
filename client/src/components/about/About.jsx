import React from 'react'
import './About.css'
import Nav from '.././nav/Nav'
import Footer from '../footer/Footer'
import ME from '../../assets/images/me.png'
import {MdMail, MdPets} from 'react-icons/md'
import { Icon } from '@iconify/react';

const About = () => {
  // about message
  return (
    <div className='about__container'>
      <Nav data={{active: 'about', message: ''}}/>
      <div className='info__container'>
        <img src={ME} alt='Molly and a dog' />
        <div className='text__container'>
          <h1>Hi, I'm Molly</h1>
          <p>CS Student @ UW<br/></p>
          <p>Pet Sitter + Dog Walker<br/> Seattle, Wa</p>
          <div className="description__container">
            <p>I post updates and photos for my clients on this site.</p>
            <p>If you're a client, login with your unique passcode.</p>
            <p>Otherwise, use "test" to login and see a demo of the site.</p>
            <p>Interested in my services? Get in touch below!</p>
          </div>
          <div className='contact__container'>
            <h2>Contact Me</h2>
            <div className="link__container">
              <a href="mailto:mamolly01@gmail.com" target='_blank' className='email-icon' rel="noreferrer"><MdMail /> Email</a>
              <a href='https://www.rover.com/sit/mollya96204' target='_blank' className='rover-icon' rel="noreferrer"><MdPets /> Rover</a>
              <a href='https://www.venmo.com/u/armstmol01' target='_blank' rel="noreferrer"><Icon icon="ion:logo-venmo" className='venmo-icon'/> Venmo</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About