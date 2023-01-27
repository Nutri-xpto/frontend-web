import React, { Component } from 'react'
import '../styles/login.css'


export class Confirmation extends Component {
  continue = e => {
    e.preventDefault();
    this.props.next_step();
  }

  back = e => {
    e.preventDefault();
    this.props.prev_step();
  }

  render() {
    const { values : { name, email,
        phone, id,
        birthday, gender, 
        height, weight, bmi, goal,
        weight_goal, bf, diseases, intolerances,
        allergies} } = this.props;
        
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
            <li className='item'>Telefone</li>
            <li className='value'>{phone}</li>
            <li className='item'>CPF</li>
            <li className='value'>{id}</li>
            <li className='item'>Data de Nascimento</li>
            <li className='value'>{birthday}</li>
            <li className='item'>Sexo</li>
            <li className='value'>{gender}</li>
            <li className='item'>Altura</li>
            <li className='value'>{height}</li>
            <li className='item'>Peso</li>
            <li className='value'>{weight}</li>
            <li className='item'>IMC</li>
            <li className='value'>{bmi}</li>
            <li className='item'>Objetivo</li>
            <li className='value'>{goal}</li>
            <li className='item'>Meta de Peso</li>
            <li className='value'>{weight_goal}</li>
            <li className='item'>Gordura Corporal</li>
            <li className='value'>{bf}</li>
            <li className='item'>Doenças</li>
            <li className='value'>{diseases}</li>
            <li className='item'>Intolerâncias</li>
            <li className='value'>{intolerances}</li>
            <li className='item'>Alergias</li>
            <li className='value'>{allergies}</li>

          </ul>
          <div className = 'container-form-btn back'>
              <button onClick = {this.back} className = 'form-btn back-btn'> Voltar </button>
          </div>

          <div className = 'container-form-btn finish'>
            <button onClick = {this.continue} className = 'form-btn finish-btn'> Finalizar Cadastro </button>
          </div>

        </div>
        </div>
        </div>
    )
  }
}

export default Confirmation