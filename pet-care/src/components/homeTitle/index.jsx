import React from 'react'
import './homeTitle.css'
import Button from '../button/Button'

const imgTitle = require('../../assets/img-title.png')

export default function homeTitle() {
    return (
        <div className='home-title'>
            <div className='title'>
                <h1 className='title-h1'>Pet Care</h1>
                <p>Veterinário em Domicílio</p>
                <a href="#/services"><Button>AGENDE UMA VISITA</Button></a>
            </div>
            <div className='img-title'>
                <img src={imgTitle} alt="Cachorrinho" />
            </div>
        </div>
    )
}