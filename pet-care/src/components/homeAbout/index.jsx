import React from 'react'
import './homeAbout.css'
import Button from '../button/Button'

const imgAbout = require('../../assets/img-vet.png')

export default function HomeAbout() {
    return (
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
    )
}