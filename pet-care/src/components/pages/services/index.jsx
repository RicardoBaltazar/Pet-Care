import React from 'react'
import './services.css'
import CardsPageServices from '../../cardsPageServices/index'

const img1 = require('../../../assets/img-services1.png')

export default function PageServices() {
    return (
        <div className='page-services'>
            <div>
                <h2>Serviços em Domicílio</h2>
            </div>

            <section>
                <CardsPageServices 
                img={img1}
                titleService="Escovação"
                descriptionService="Use esta área para descrever o seu serviço."
                time="35 min"
                value='R$35'
                />
                
                <CardsPageServices 
                img={img1}
                titleService="Escovação"
                descriptionService="Use esta área para descrever o seu serviço."
                time="35 min"
                value='R$35'
                />

                <CardsPageServices 
                img={img1}
                titleService="Escovação"
                descriptionService="Use esta área para descrever o seu serviço."
                time="35 min"
                value='R$35'
                />
            </section>

            <section>
                asdasd
            </section>
        </div>
    )
}