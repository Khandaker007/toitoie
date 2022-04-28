import React from 'react'

// layout
import cardLayout from '../../assets/layout/offer-card-layout.svg';

import './offer-card.style.scss'

export default function OfferCard({text, number}) {
  return (
    <div className='card'>
        <div className="card__mask"></div>
        <h1 className='heading-1 clr-gradient card__number'>{number}</h1>
        <h2 className='heading-2 card__heading'>{text}</h2>
        <div className="img-container">
            <img src={cardLayout} className='card__layout' alt="layout" />
        </div>
    </div>
  )
}
