import React from 'react'

import Slider from 'react-slick'

// components
import SliderCard from '../slider-card/slider-card.component'

// data
import packagesData from './data'

import './package-slider.style.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function PackageSlider() {

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

  return (
    <div className='package-slider'>
        <Slider {...settings}>
            {
                packagesData.map((packageData) =>(
                    <SliderCard key={packageData.id} data={packageData}/>
                ))
            }
        </Slider>
    </div>
  )
}
