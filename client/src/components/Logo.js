import React from 'react'
import logo from '../assets/images/logoalt.svg'

const Logo = () => {
  return (
    <nav>
        <img src={logo} alt='jobify' className='logo'/>
    </nav>
  )
}

export default Logo