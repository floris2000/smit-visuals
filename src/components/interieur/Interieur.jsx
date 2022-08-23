import React from 'react'
import './interieur.css'
import InterieurIMG from '../../img/Kitchen.jpg'

const Interieur = () => {
  return (
    <div className='i' id='interieur'>
        <div className="i-left">
            <div className="i-img-wrapper">
                <img
                    src={InterieurIMG} 
                    alt="interieur" 
                    className="i-img" 
                />
            </div>
        </div>
        <div className="i-right">
            <h1 className="i-title">Interieur</h1>
            <p className="i-info">
                Van plattegrond tot een mooie visualisatie. <br></br>
                Krijg inzicht in uw project en zie hoe uw interieur eruit komt te zien.
                Wilt u een nieuwe kamer indelen, of een bestaand interieur veranderen? <br></br>
                Smit Visuals brengt het in beeld.
            </p>
            <button className="i-btn">
                Meer info
            </button>
        </div>
    </div>
  )
}

export default Interieur