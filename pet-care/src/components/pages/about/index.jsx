import React from 'react'
import './pageAbout.css'

const imgAbout = require('../../../assets/img-about1.png')

export default function PageAbout() {
    return (
        <div className="pageAbout">
            <div>
                <h2>Olá, Sou o Dr. Lucas Silveira</h2>
            </div>

            <div className='div-about-infos'>
                <img src={imgAbout} alt="Imagem do doutor" />
                <div className='text-about'>
                    <span>Mais de 16 anos de experiência em Veterinária</span><br/>
                    <p>
                        Sou um parágrafo. Clique aqui para editar e adicionar
                            o seu próprio texto. É fácil! Basta clicar em "Editar
                            Texto" ou clicar duas vezes sobre mim e você poderá
                            adicionar o seu próprio conteúdo. Sinta-se à vontade
                            para arrastar e soltar em qualquer lugar em sua página.
                            Sou um ótimo lugar para você contar sua história</p>
                    <p>Este é um ótimo espaço para escrever um texto longo sobre
                    a sua empresa e seus serviços. Você pode usar esse espaço
                    para detalhar sua empresa. Fale sobre a sua equipe e
                    sobre os serviços prestados por você. Conte aos seus
                    visitantes sobre como teve a idéia de iniciar o seu
                            negócio e o que o torna diferente de seus concorrentes.</p>
                </div>
            </div>
        </div>
    )
}