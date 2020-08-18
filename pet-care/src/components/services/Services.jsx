import React from 'react'
import './services.css'

export default function Services(props) {
    return (
        <div className='services'>
            <img src={props.imageService} alt="imagem de Pet" />
            <h3>{props.nameOfService}</h3>
            <p>{props.descriptionOfService}</p>
        </div>
    )
}