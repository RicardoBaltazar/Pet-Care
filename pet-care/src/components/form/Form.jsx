import React, { Component } from 'react'
import './form.css'


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
    }

    handleName(event){
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit(event){
        const name = this.state.name
        alert('Ola Mundo! ' + name)
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
                        <input type="email" name="" id="" placeholder='Email' />
                    </div>

                    <input type="text" placeholder='Assunto' />
                    <input name="" id="" placeholder='Deixe sua mensagem aqui...' className='input-message'/>
                    <button type="submit">Enviar</button>
                </form>
            </>
        )
    }
}