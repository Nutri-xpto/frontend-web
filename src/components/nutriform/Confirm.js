import React, { Component } from 'react'
import { registerNutri } from '../../servers/NutriServer';
import '../styles/login.css'


export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.next_step();
  }

  back = e => {
    e.preventDefault();
    this.props.prev_step();
  }

  sendData = (values) => {
    registerNutri(this.props.values);
    this.continue();
  }

  render() {
    const { values : { name, email,
                       code, education, 
                       clinic_address, city, additional_info } } = this.props;
        
    return (
        <div className = 'container'>
        <div className = 'container-info'>
        <div className = 'wrap-info'>
        <span className ='info-form-logo'>
              <img src = {'/images/logo.png'} alt = "logo"/>
            </span>
          <ul className='list-config'>
            <li className='item'>Nome</li>
            <li className='value'>{name}</li>
            <li className='item'>Email</li>
            <li className='value'>{email}</li>
            <li className='item'>Código</li>
            <li className='value'>{code}</li>
            <li className='item'>Educação</li>
            <li className='value'>{education}</li>
            <li className='item'>Endereço</li>
            <li className='value'>{clinic_address}</li>
            <li className='item'>Cidade</li>
            <li className='value'>{city}</li>
            <li className='item'>Informação Adicional</li>
            <li className='value'>{additional_info}</li>

          </ul>
          <div className = 'container-form-btn back'>
              <button onClick = {this.back} className = 'form-btn back-btn'> Voltar </button>
          </div>

          <div className = 'container-form-btn finish'>
            <button onClick = {this.sendData} className = 'form-btn finish-btn'> Finalizar Cadastro </button>
          </div>

        </div>
        </div>
        </div>
    )
  }
}

export default Confirm