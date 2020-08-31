import React from 'react'
import './services.css'
import CardsPageServices from '../../cardsPageServices/index'

const img1 = require('../../../assets/img-services1.png')
const img2 = require('../../../assets/img-services2.png')
const img3 = require('../../../assets/img-services3.png')
const img4 = require('../../../assets/img-services4.png')
const img5 = require('../../../assets/img-services5.png')
const img6 = require('../../../assets/img-services6.png')

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
                img={img2}
                titleService="Vacinação"
                descriptionService="Use esta área para descrever o seu serviço."
                time="15 min"
                value='R$60'
                />

                <CardsPageServices 
                img={img3}
                titleService="Comportamental"
                descriptionService="Use esta área para descrever o seu serviço."
                time="1 h 30 min"
                value='R$200'
                />
            </section>

            <section>
            <CardsPageServices 
                img={img4}
                titleService="Checkup"
                descriptionService="Use esta área para descrever o seu serviço."
                time="30 min"
                value='R$100'
                />
                
                <CardsPageServices 
                img={img5}
                titleService="Terapia para Dores"
                descriptionService="Use esta área para descrever o seu serviço."
                time="45 min"
                value='R$45'
                />

                <CardsPageServices 
                img={img6}
                titleService="Cuidado Dental"
                descriptionService="Use esta área para descrever o seu serviço."
                time="20 min"
                value='R$25'
                />
            </section>
        </div>
    )
}