import React, { Component } from 'react'
import './form.css'


export default class Form extends Component {
    render() {
        return (
            <>
                <form action="">

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
                        <input type="text" placeholder='Nome' />
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