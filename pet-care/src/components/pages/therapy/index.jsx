import React, { Component } from 'react'
import './therapy.css'
import Button from '../../button/Button'
import axios from 'axios'

const url = 'https://api-pet-care.herokuapp.com/page-pain-therapy'
const img1 = require('../../../assets/img-page-therapy.png')

export default class PagePainTherapy extends Component {

    constructor(props){
        super(props) 
        this.state = {
            name: '',
            contact: '',
            date: '',
            hour: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleContact = this.handleContact.bind(this)
        this.handleDate = this.handleDate.bind(this)
        this.handleHour = this.handleHour.bind(this)
    }


    handleName(event){
        this.setState({
            name: event.target.value
        })
    }

    handleContact(event){
        this.setState({
            contact: event.target.value
        })
    }

    handleDate(event){
        this.setState({
            date: event.target.value
        })
    }

    handleHour(event){
        this.setState({
            hour: event.target.value
        })
    }

    handleSubmit(event){
        const name = this.state.name
        const contact = this.state.contact
        const date = this.state.date
        const hour = this.state.hour

        axios.post(url, {
            Name: name,
            contact: contact,
            date: date,
            hour: hour
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        event.preventDefault();
        alert('cadastro Realizado!')
    }

    render() {
        return (
            <div className='div-page-therapy'>
                <h2>Terapia para Dores</h2>
                <small>Use esta área para descrever o seu serviço</small>
                <p>45 minutos | R$ 45</p>
                <img src={img1} alt="imagem do cachorrinho" />
                <p className='descripition-therapy'>Descreva seu serviço aqui. O que o torna especial?
                Use um texto curto e atraente para contar os seus
                serviços oferecidos e os benefícios que você propõe.
                Uma boa descrição coloca os leitores no clima e os
                incentiva a agendar.
            </p>
            <br/><br/>
                <p>Terapia para Dores</p>
                <p>45 minutos | R$ 45</p>
                <br/><br/><br/>
                <p>Agende Online</p>
                <form action="" onSubmit={this.handleSubmit}>

                    <label htmlFor="">Nome</label>
                    <input type="text" value={this.state.name} onChange={this.handleName}/>

                    <label htmlFor="">Contato / telefone ou email</label>
                    <input type="text" value={this.state.contact} onChange={this.handleContact}/>

                    <label htmlFor="">Data</label>
                    <input type="date" name="" id="" value={this.state.date} onChange={this.handleDate}/>

                    <label htmlFor="">Hora</label>
                    <input type="time" name="" id="" value={this.state.hour} onChange={this.handleHour}/>

                    <Button>Agendar</Button>
                </form>

            </div>
        )
    }
}