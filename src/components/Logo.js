import React from 'react'
import { Link } from 'react-router-dom'
import logoImage from "../images/logo.png"

const Logo = () => {
  return (
    <Link to={'/'}>
        <img className='logo' src={logoImage} role={'button'} alt={'gifted brain'} />
    </Link>
  )
}

export default Logo