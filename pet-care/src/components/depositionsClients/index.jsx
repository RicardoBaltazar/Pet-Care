import React from 'react'
import './depositionsClients.css'

import Depositions from '../depositions/index'

export default function DepositionsClients() {
    return (
        <>
            <section className='deposition-clients'>
                <h3>O que os donos dizem</h3>
                <div>
                    <Depositions title='"Muito Profissional"' deposition='
            Sou um depoimento. Clique para editar e adicionar 
            um texto sobre você e seus serviços. Permita que seus 
            clientes recomendem seus serviços e digam a seus amigos
            o quão profissional você é.
            '
                        nameClient='Alice Mendes' />

                    <Depositions title='"Ótimo Serviço"' deposition='
            Sou um depoimento. Clique para editar e adicionar 
            um texto sobre você e seus serviços. Permita que seus 
            clientes recomendem seus serviços e digam a seus amigos
            o quão profissional você é.
            '
                        nameClient='Daniel Melo' />

                    <Depositions title='"Gentil e Amável"' deposition='
            Sou um depoimento. Clique para editar e adicionar 
            um texto sobre você e seus serviços. Permita que seus 
            clientes recomendem seus serviços e digam a seus amigos
            o quão profissional você é.
            '
                        nameClient='Beatriz Santos' />
                </div>
            </section>
        </>
    )
}