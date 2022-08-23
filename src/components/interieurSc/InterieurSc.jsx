import React from 'react'
import './interieursc.css'
import HangingChair from '../../img/HangingChair.jpg'
import Bedroom from '../../img/Bedroom.jpg'
import LivingRoom2 from '../../img/LivingRoom2.jpg'
import DiningRoom from '../../img/DiningRoom.jpg'
import Bathroom from '../../img/Bathroom.jpg'
import LivingRoom1 from '../../img/LivingRoom1.jpg'

const InterieurSc = () => {
  return (
    <div className='isc'>
        <div className="isc-top">
            <div className="isc-l">
                <img 
                    src={HangingChair} 
                    alt="hangingchair" 
                    className="isc-img" 
                />
            </div>
            <div className="isc-l">
                <img 
                    src={Bedroom} 
                    alt="bedroom" 
                    className="isc-img" 
                />
            </div>
            <div className="isc-s">
                <img 
                    src={LivingRoom2} 
                    alt="livingroom2" 
                    className="isc-img" 
                />
            </div>
        </div>
        <div className="isc-bottom">
            <div className="isc-s">
                <img 
                    src={DiningRoom} 
                    alt="diningroom" 
                    className="isc-img" 
                />
            </div>
            <div className="isc-l">
                <img 
                    src={Bathroom} 
                    alt="bathroom" 
                    className="isc-img" 
                />
            </div>
            <div className="isc-l">
                <img 
                    src={LivingRoom1} 
                    alt="livingroom1" 
                    className="isc-img" 
                />
            </div>
        </div>
    </div>
  )
}

export default InterieurSc