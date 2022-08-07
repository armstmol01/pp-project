import React from 'react'
import { Link } from "react-router-dom";
import './Nav.css'
import {IoMdArrowRoundBack} from 'react-icons/io'

const Nav = (props) => {
  const activeNav = props.data.active;
  const backArrowMsg = props.data.message;
  // React.Element()

  // set as 'active' or ''
  return (
    <nav>
      {/* <Link to='/' id={activeNav === 'home' ? 'name' : ''} className={activeNav === 'home' ? 'home link' : 'link'}>{activeNav==='home'?'Molly\'s':<IoMdArrowRoundBack className='back-arrow-icon'/>}</Link> */}
      {activeNav === 'home' ? <Link to='/' id='name' className='link'>{'Molly\'s'}</Link> : <Link to='/' className='link'><div className='back_arrow__container'><IoMdArrowRoundBack className='back-arrow-icon'/><p>{backArrowMsg}</p></div></Link>}
      {activeNav === 'home' || activeNav === 'about' ? <Link to='/about' className={activeNav === 'about'? 'about link' : 'link'}>about</Link> : ''}
    </nav>
  )
}

export default Nav