import React from 'react'
import Logo1 from './img/Logo.png';
import Logo2 from './img/Logo2.png';
import './Nav.css'


function Nav() {
    return (
        <div>
            <nav className="nav">
                <img className="imgLogo" src={Logo1} alt="" />
               
                <img className="imgLogo2" src={Logo2} alt="" />
                 <h2 align="center" className="Heading-main">Quantitative techniques</h2>
            </nav>
        </div>
    )
}

export default Nav
