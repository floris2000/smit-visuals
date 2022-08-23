import React, {useState} from 'react'
import {Link} from 'react-scroll'
import './navbar.css'

const Navbar = () => {

    //change nav to sticky when scrolling
    const [sticky, setSticky] = useState(false)
    const changeNav = () => {
        if (window.scrollY >= 1000) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }

    window.addEventListener('scroll', changeNav);

    return (
      <div className={sticky ? 'n n-sticky': 'n'}>
          <nav className={sticky ? 'nav nav-sticky': 'nav'}>
              <a href='/' className='nav-logo'>SMIT Visuals</a>
              <ul>
                  <li>
                      <Link to='interieur' spy={true} smooth={true} offset={200} duration={500}>Interieur</Link>
                      <div className="nav-underline"></div>
                  </li>
                  <li>
                      <Link to='exterieur' spy={true} smooth={true} offset={200} duration={1000}>Exterieur</Link>
                      <div className="nav-underline"></div>
                  </li>
                  <li>
                      <Link to='contact' spy={true} smooth={true} offset={0} duration={1200}>Contact</Link>
                      <div className="nav-underline"></div>
                  </li>
              </ul>
          </nav>
      </div>
    )
}

export default Navbar