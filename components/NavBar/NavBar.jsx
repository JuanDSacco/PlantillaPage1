import React from 'react'
import '../../Styles/styles.scss'
import Logo from '../../../public/assets/logo.png'

const NavBar = () => {

    return (
        <div className='divNavBarContainer'>
            <div className='divLogo'>
                <img className='imgNavBarLogo' src={Logo} alt='Logo'/>
            </div>
            <div className='divNavBar'>
                <ul className='ulNavBar'>
                    <li id='liHomeNavBar' className='liNavBar'>Inicio</li>
                    <li className='liNavBar'>Pizzería</li>
                    <li className='liNavBar'>Menú</li>
                    <li className='liNavBar'>Contacto</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
