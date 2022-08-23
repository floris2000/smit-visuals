import React from 'react'
import "./hero.css"
import HeroIMG from '../../img/Hero.jpg'

const Hero = () => {
  return (
    <div className='h'>
        <div className="h-img-wrapper">
            <img
                src={HeroIMG} 
                alt="hero" 
                className="h-img1" 
            />
        </div>
        <div className="h-wrapper">
            <h1 className="h-title">Smit Visuals</h1>
            <p className="h-info">
            Met de realistische renders van <br></br>SMIT Visuals
komen uw ideeën tot leven.
            </p>
        </div>
    </div>
  )
}

export default Hero