import React from 'react'
import './pageHome.css'

import HomeTitle from '../../homeTitle/index'
import HomeAbout from '../../homeAbout/index'
import Button from '../../button/Button'
import Services from '../../services/Services'
import ImageClients from '../../imageClients/index'
import DepositionsClients from '../../depositionsClients/index'
import Form from '../../form/Form'

const imgServiceBrushing = require('../../../assets/escovacao.png')
const imgServiceCheckup = require('../../../assets/checkup.png')
const imgServiceDental = require('../../../assets/dental.png')


export default function PageHome() {
    return (
        <>
            <main>
                <HomeTitle  />
                <HomeAbout />



                <div className='home-services'>
                    <h2>Serviços</h2>

                    <div className='cards-services'>
                        <div className='card-services'>
                            <Services imageService={imgServiceBrushing} nameOfService='Escovação'
                                descriptionOfService='Sou um parágrafo. Use esta área para descrever 
                    um de seus serviços. Você pode trocar o título para o serviço que você 
                    presta e descrevê-lo. Sinta-se à vontade para mudar a imagem.'
                            />
                            <Button>RESERVE JÁ</Button>
                        </div>

                        <div className='card-services'>
                            <Services imageService={imgServiceCheckup} nameOfService='Checkup'
                                descriptionOfService='Sou um parágrafo. Use esta área para descrever 
                    um de seus serviços. Você pode trocar o título para o serviço que você 
                    presta e descrevê-lo. Sinta-se à vontade para mudar a imagem.'
                            />
                            <Button>RESERVE JÁ</Button>
                        </div>

                        <div className='card-services'>
                            <Services imageService={imgServiceDental} nameOfService='Dental'
                                descriptionOfService='Sou um parágrafo. Use esta área para descrever 
                    um de seus serviços. Você pode trocar o título para o serviço que você 
                    presta e descrevê-lo. Sinta-se à vontade para mudar a imagem.'
                            />
                            <Button>RESERVE JÁ</Button>
                        </div>  
                    </div>
                </div>

                <ImageClients />
                <DepositionsClients />
                <Form />
            </main>
        </>
    )
}