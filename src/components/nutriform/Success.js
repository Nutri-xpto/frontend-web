import React, { Component } from 'react'
import '../styles/login.css'


export class Success extends Component {
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
            <h1 className='head'>O seu cadastro foi realizado com sucesso.</h1>
            <p className='texts'>Você receberá em seu e-mail mais informações sobre a plataforma.</p>
          </div>
        </div>
        </div>
    )
  }
}

export default Success