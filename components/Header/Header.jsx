import React from 'react'
import '../../Styles/styles.scss'
import BackgroundImage from '../../../public/assets/background_header.png'
import Photo from '../../../public/assets/photo_header.png'

const Header = () => {
    
    return (
        <div className='divHeaderContainer'>
            <div className='divBackgroundHeader'>
                <img className='backgroundHeader' src={BackgroundImage} alt='Background'/>
            </div>
            <div className='divTextHeader'>
                <div className='divH1Header'>
                    <h1 className='h1Header'>Bienvenidos a La Pizze</h1>
                </div>
                <h2 className='h2Header'>Un lugar para disfrutar en familia</h2>
            </div>
        </div>
    )
}

export default Header
