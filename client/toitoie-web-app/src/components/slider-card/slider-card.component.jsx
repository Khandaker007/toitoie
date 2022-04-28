import React from 'react'

import image1 from '../../assets/images/package-img-1.png'

import './slider-card.style.scss'

export default function SliderCard({data}) {
  return (
    <div className='slider-card'>
        <h2 className='slider-card__name'>{data.title}</h2>
        <img src={data.image} className='slider-card__image' alt="card image" />
    </div>
  )
}
