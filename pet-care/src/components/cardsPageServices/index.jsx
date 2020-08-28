import React from 'react'
import './cardsPageServices.css'
import Button from '../button/Button'

export default function CardsPageServices(props) {
    return (
        <div className='cards-page-services'>
            <img src={props.img} alt="" />
            <h3>{props.titleService}</h3>
            <p>{props.descriptionService}</p>
            <p>{props.time}</p>
            <p>{props.value}</p>
            <Button >Agendar Já</Button>
        </div>
    )
}