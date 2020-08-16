import React from 'react'
import './pageHome.css'

import Button from '../../button/Button'
const imgTitle = require('../../../assets/img-title.png')


export default function PageHome() {
    return (
        <>
            <main>
                <div className='home-title'>
                    <div className='title'>
                        <h1 className='title-h1'>Pet Care</h1>
                        <p>Veterinário em Domicílio</p>
                        <Button>AGENDE UMA VISITA</Button>
                    </div>
                    <div className='img-title'>
                        <img src={imgTitle} alt=""/>
                    </div>
                </div>

                <div className='home-about'>
                        sdfsdfv vv
                </div>
            </main>
        </>
    )
}