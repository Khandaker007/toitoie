import React from 'react'

import './form-submit-btn.style.scss'

export default function FormBtn({children, type}) {
  return (
    <div className='form-btn-container'>
        <button type={type} className='form-btn'>{children}</button>
    </div>
  )
}
