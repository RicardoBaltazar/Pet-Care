import React from 'react'
import './header.css'

import MenuBurguer from './MenuBurguer'

//const imageLogo = require('../../assets/image-logo.svg')

export default function Menu() {
    return (
        <>
            <header>
                <div className='logotipo'>
                    {/*<img src={imageLogo} alt="logotipo" className='image-logotipo'/>*/}
                    <a href="#/">Pet Care</a>
                </div>
                <nav>
                    <MenuBurguer />
                </nav>
            </header>
        </>
    )
}