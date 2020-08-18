import React from 'react'
import './pageHome.css'

import Button from '../../button/Button'
import Services from '../../services/Services'
import ImageClients from '../../imageClients/index'
import DepositionsClients from '../../depositionsClients/index'
import Form from '../../form/Form'

const imgTitle = require('../../../assets/img-title.png')
const imgAbout = require('../../../assets/img-vet.png')
const imgServiceBrushing = require('../../../assets/escovacao.png')
const imgServiceCheckup = require('../../../assets/checkup.png')
const imgServiceDental = require('../../../assets/dental.png')


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
                        <img src={imgTitle} alt="Cachorrinho" />
                    </div>
                </div>

                <div className='home-about'>
                    <div className='img-about'>
                        <img src={imgAbout} alt="vet" />
                    </div>
                    <div className='title-about'>
                        <h2>Sobre mim</h2>
                        <p>Sou um parágrafo. Clique aqui para editar e
                        adicionar o seu próprio texto. É fácil!
                        Basta clicar em "Editar Texto" ou clicar
                        duas vezes sobre mim e você poderá adicionar
                        o seu próprio conteúdo e trocar fontes.
                            Sou um ótimo lugar para você contar sua história</p>
                        <Button>LEIA MAIS</Button>
                    </div>
                </div>

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