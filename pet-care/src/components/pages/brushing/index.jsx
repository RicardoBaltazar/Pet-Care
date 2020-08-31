import React from 'react'
import './brushing.css'
import Button from '../../button/Button'

const img1 = require('../../../assets/img-page-brushing.png')

export default function PageBrushing() {
    return (
        <div className='div-page-brushing'>
            <h2>Escovação</h2>
            <small>Use esta área para descrever o seu serviço</small>
            <p>35 minutos | R$ 35</p>
            <img src={img1} alt="imagem do cachorrinho" />
            <p className='descripition-brushing'>Descreva seu serviço aqui. O que o torna especial?
            Use um texto curto e atraente para contar os seus
            serviços oferecidos e os benefícios que você propõe.
            Uma boa descrição coloca os leitores no clima e os
            incentiva a agendar.
            </p>
            <p>Agende Online</p>
            <p>Escovação</p>
            <p>35 minutos | R$ 35</p>
            <form action="">
                <input type="text" />
                <input type="datetime" name="" id="" />
                
            </form>

        </div>
    )
}