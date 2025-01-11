import React from 'react'
import Logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={Logo} alt='Logo'/>
        <h1>Item List Manager</h1>
    </nav>
  )
}

export default Navbar