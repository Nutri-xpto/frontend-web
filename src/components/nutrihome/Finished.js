import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/login.css'

export class Finished extends Component {
  render() {
    return (
        <div className = 'container'>
        <div className = 'container-info register'>
          <div className = 'wrap-info'>
          <span className ='info-form-logo'>
            <img src = {'/images/logo.png'} alt = "logo"/>
          </span>
            <h1 className='head'>Dieta Cadastrada!</h1>
            <div className = 'container-form-btn back'>
              <NavLink to = '/diets'><button className = 'form-btn back-btn-two'> Voltar </button></NavLink>
            </div>

          </div>
        </div>
        </div>
    )
  }
}

export default Finished