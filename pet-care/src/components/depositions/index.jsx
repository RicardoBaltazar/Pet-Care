import React from 'react'
import './depositions.css'

export default function Depositions(props) {
    return (
        <div className='deposition'>
            <h3>{props.title}</h3>
            <p>{props.deposition}</p>
            <strong>{props.nameClient}</strong>
        </div>
    )
}