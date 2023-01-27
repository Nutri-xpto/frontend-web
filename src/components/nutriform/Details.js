import React, { Component } from 'react'
import '../styles/login.css'

export class Details extends Component {
  continue = e => {
    e.preventDefault();
    this.props.next_step();
  }
  render() {
    const { values, handleChange } = this.props;
    return (
        <div className = 'container'>
        <div className = 'container-info register'>
          <div className = 'wrap-info'>
            <form className = 'info-form' onSubmit = {'continue'}>
  
              <span className = 'info-form-logo'>
                <img src = {'/images/logo.png'} alt = "logo"/>
              </span>
                
              <div className = 'wrap-input'>
                <input className = {values.name !== "" ? 'has-val input' : 'input'} 
                       type = "name" 
                       value = {values.name} 
                       onChange = {handleChange('name')} />
                <span className = 'focus-input' data-placeholder = "Nome"></span>
              </div>
  
              <div className = 'wrap-input'>
                <input className = {values.email !== "" ? 'has-val input' : 'input'} 
                       type = "email" 
                       value = {values.email} 
                       onChange = {handleChange('email')} />
                <span className='focus-input' data-placeholder = "E-mail"></span>
              </div>
  
              <div className = 'wrap-input'>
                <input className = {values.password !== "" ? 'has-val input' : 'input'} 
                       type = "password" 
                       value = {values.password} 
                       onChange = {handleChange('password')} />
                <span className = 'focus-input' data-placeholder = "Senha"></span>
              </div>

              <div className = 'wrap-input'>
                <input className = {values.password_confirmation !== "" ? 'has-val input' : 'input'} 
                       type = "password" 
                       value = {values.password_confirmation} 
                       onChange = {handleChange('password_confirmation')} />
                <span className ='focus-input' data-placeholder = "Confirmação de Senha"></span>
              </div>
  
              <div className = 'container-form-btn next'>
                <button onClick = {this.continue} className ='form-btn next-btn'> Próxima Etapa </button>
              </div>
            </form>
            <div className='container-dot'>
              <span class="dot active"></span>
              <span class="dot inactive"></span>
            </div>
          </div>
        </div>
        </div>
    )
  }
}

export default Details