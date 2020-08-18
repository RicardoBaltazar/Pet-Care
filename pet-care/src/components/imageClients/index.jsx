import React from 'react'
import './imageClients.css'

const imgGrid1 = require('../../assets/img-grid-client1.png')
const imgGrid2 = require('../../assets/img-grid-client2.png')
const imgGrid3 = require('../../assets/img-grid-client3.png')
const imgGrid4 = require('../../assets/img-grid-client4.png')
const imgGrid5 = require('../../assets/img-grid-client5.png')
const imgGrid6 = require('../../assets/img-grid-client6.png')

export default function ImageClients() {
    return (
        <section className='image-clients'>
            <h3>Amo meus clientes</h3>
            <div className='grid-imagens-clients'>
                <img src={imgGrid2} alt="imagem vet e pet" />
                <img src={imgGrid3} alt="imagem vet e pet" />
                <img src={imgGrid4} alt="imagem vet e pet" />
                <img src={imgGrid1} alt="imagem vet e pet" />
                <img src={imgGrid5} alt="imagem vet e pet" />
                <img src={imgGrid6} alt="imagem vet e pet" />
            </div>
        </section>
    )
}