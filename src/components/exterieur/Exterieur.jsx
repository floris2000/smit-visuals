import React from 'react'
import './exterieur.css'
import ExterieurIMG from '../../img/Street.jpg'

const Exterieur = () => {
  return (
    <div className='e' id='exterieur'>
        <div className="e-left">
            <h1 className="e-title">Exterieur</h1>
            <p className="e-info">
                Visualiseer nieuwbouw, bestaande gebouwen, tuinen en meer.<br></br>
                Wilt u bijvoorbeeld weten hoe een tuinhuisje eruit komt te zien? of een nieuwe schutting?<br></br>
                Smit Visuals brengt het idee tot leven.
            </p>
            <button className="e-btn">
                Meer info
            </button>
        </div>
        <div className="e-right">
            <div className="e-img-wrapper">
                <img
                    src={ExterieurIMG} 
                    alt="exterior" 
                    className="e-img" 
                />
            </div>
        </div>
    </div>
  )
}

export default Exterieur