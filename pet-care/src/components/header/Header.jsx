import React from 'react'
import './header.css'

const imageLogo = require('../../assets/image-logo.svg')

export default function Menu() {
    return (
        <header>
            <div className='logotipo'>
                {/*<img src={imageLogo} alt="logotipo" className='image-logotipo'/>*/}
                <a href="">Pet Care</a>
            </div>
            <nav>
                <a className='link-home' href="">Página Inicial</a>
                <a href="">Sobre</a>
                <a href="">Serviços</a>
                <a href="">Blog</a>
                <a href="">Contato</a>
            </nav>
        </header>
    )
}