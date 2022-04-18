import React from 'react'

// ICON
import rightArrow from '../../assets/icons/right-arrow.png'

import './button.style.scss'

export default function Button({text}) {
  return (
    <button className='btn btn-white'>{text} <img src={rightArrow} alt="right arrow" /></button>
  )
}
