import React from 'react'
import { Link } from 'react-router-dom'

// logo
import logo from '../../assets/logo/toitoie-logo.png'

import './header.style.scss'

export default function Header() {
  return (
    <div className="header">
        <div className="logo-container">
            <img src={logo} className='logo' alt="toitoie logo" />
        </div>
        <ul className="list">
            <li className="list__item">
                <Link to='/' className='list__item--link'>Home</Link>
            </li>
            <li className="list__item">
                <Link to='/package-list' className='list__item--link'>Packages</Link>
            </li>
            <li className="list__item">
                <Link to='' className='list__item--link'>Information</Link>
            </li>
            <li className="list__item">
                <Link to='' className='list__item--link'>About Us</Link>
            </li>
        </ul>
    </div>
  )
}
