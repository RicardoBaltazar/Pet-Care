import React, { Component } from 'react'
import './form.css'
import axios from 'axios'

const url = 'http://localhost:8000/message-contact'

export default class Form extends Component {

    constructor(props){
        super(props) 
        this.state = {
            name: '',
            email: '',
            topic: '',
            message: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleTopic = this.handleTopic.bind(this)
        this.handleMessage = this.handleMessage.bind(this)
    }

    handleName(event){
        this.setState({
            name: event.target.value
        })
    }

    handleEmail(event){
        this.setState({
            email: event.target.value
        })
    }

    handleTopic(event){
        this.setState({
            topic: event.target.value
        })
    }

    handleMessage(event){
        this.setState({
            message: event.target.value
        })
    }

    handleSubmit(event){
        const name = this.state.name
        const email = this.state.email
        const topic = this.state.topic
        const message = this.state.message

        axios.post(url, {
            Name: name,
            email: email,
            topic: topic,
            message: message
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        event.preventDefault();
        alert('Post Realizado!')
    }

    render() {
        return (
            <>
                <form action="" onSubmit={this.handleSubmit}>

                    <h3>Contato</h3>
                    <div className='contact'>
                        <div>
                            <h4>Telefone</h4>
                            <p>(11) 3456-7890</p>
                        </div>
                        <div>
                            <h4>Email</h4>
                            <p>info@meusite.com</p>
                        </div>
                        <div>
                            <h4>Horário</h4>
                            <p>Seg - Sex: 9:00 - 20:00</p>
                        </div>
                        <div>
                            <h4>Área de Serviço</h4>
                            <p>São Paulo e interior</p>
                        </div>
                    </div>

                    <div className='input-name'>
                        <input type="text" placeholder='Nome' value={this.state.name} onChange={this.handleName}/>
                        <input type="email" name="" id="" placeholder='Email' value={this.state.email} onChange={this.handleEmail}/>
                    </div>

                    <input type="text" placeholder='Assunto' value={this.state.topic} onChange={this.handleTopic}/>
                    <input name="" id="" placeholder='Deixe sua mensagem aqui...' className='input-message' 
                    value={this.state.message} onChange={this.handleMessage}/>
                    <button type="submit">Enviar</button>
                </form>
            </>
        )
    }
}