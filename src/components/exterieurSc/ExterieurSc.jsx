import React from 'react'
import './exterieursc.css'
import Gym from '../../img/Gym.jpg'
import Hero from '../../img/Hero.jpg'
import Beetle from '../../img/BeetleWreck.jpg'
import Nature from '../../img/Nature.jpg'
import ModernHouse from '../../img/ModernHouse.jpg'
import Street from '../../img/Street.jpg'

const ExterieurSc = () => {
  return (
    <div className='esc'>
        <div className="esc-top">
            <div className="esc-s">
                <img 
                    src={Beetle} 
                    alt="" 
                    className="esc-img" 
                />
            </div>
            <div className="esc-l">
                <img 
                    src={Hero} 
                    alt="" 
                    className="esc-img" 
                />
            </div>
            <div className="esc-l">
                <img 
                    src={Gym} 
                    alt="" 
                    className="esc-img" 
                />
            </div>
        </div>
        <div className="esc-bottom">
            <div className="esc-l">
                <img 
                    src={Street} 
                    alt="" 
                    className="esc-img" 
                />
            </div>
            <div className="esc-l">
                <img 
                    src={ModernHouse} 
                    alt="" 
                    className="esc-img" 
                />
            </div>
            <div className="esc-s">
                <img 
                    src={Nature} 
                    alt="" 
                    className="esc-img" 
                />
            </div>
        </div>
    </div>
  )
}

export default ExterieurSc