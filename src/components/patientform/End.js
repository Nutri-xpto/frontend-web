import React, { Component } from 'react'
import '../styles/login.css'


export class End extends Component {
  continue = e => {
    e.preventDefault();
    this.props.next_step();
  }
  render() {
    

    return (
        <div className = 'container'>
        <div className = 'container-info register'>
          <div className = 'wrap-info'>
          <span className ='info-form-logo'>
            <img src = {'/images/logo.png'} alt = "logo"/>
          </span>
            <h1 className='head'>Cadastro Finalizado!</h1>
            <p className='texts'>Senha de Acesso: 12ew21 </p>
            <div className = 'container-form-btn back'>
              <button className = 'form-btn back-btn'> Ver Ficha </button>
            </div>

            <div className = 'container-form-btn finish'>
              <button className = 'form-btn finish-btn'> Cadastrar Dieta </button>
            </div>
          </div>
        </div>
        </div>
    )
  }
}

export default End