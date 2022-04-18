import React from 'react'

// COMPONENT
import Button from '../../components/button/button.component'

// IMAGE
import heroImageMain from '../../assets/images/hero-img.png'
import heroImageSmall from '../../assets/images/hero-img-sm.png'

import './home.style.scss'

export default function Home() {
  return (
    <div className='home'>
        <div className="home__hero">
          <div className="home__hero--container-left">
            <h1 className='heading'>
              <span className='heading-2 clr-gradient'>We are ToiToie.</span>
              <span className='heading-1 clr-primary'>We <span className='heading-1 clr-gradient'>Take Care</span> of your Trip.</span>
            </h1>
            <div className="box">
              <p>ToiToiE (Ex- Exploit) is a digital travel company & a one-stop service platform for hassle-free travel. We share the most authentic travel stories through video documentation and immerse you into this meaningful kaleidoscope. Let's travel without trouble!</p>
            </div>
            <div className="btn-container">
              <Button text='Book a trip!'/>
            </div>
          </div>
          <div className="home__hero--container-right">
            <div className="img-container">
              <img src={heroImageMain} alt="hero image" />
            </div>
            <div className="img-container-sm">
              <img src={heroImageSmall} alt="hero image" />
            </div>
          </div>
        </div>
    </div>
  )
}
