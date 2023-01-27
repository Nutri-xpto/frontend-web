import React, { Component } from 'react'
import '../styles/login.css'

export class Additional extends Component {
  continue = e => {
    e.preventDefault();
    this.props.next_step();
  }

  back = e => {
    e.preventDefault();
    this.props.prev_step();
  }

  render() {
    const { values, handleChange } = this.props;
    return (
        <div className='container-info'>
        <div className = 'wrap-info'>

          <span className = 'info-form-logo'>
            <img src = {'/images/logo.png'} alt = "logo"/>
          </span>

          <div className = 'wrap-input'>
            <input className = {values.code !== "" ? 'has-val input' : 'input'} 
                        type = "code" 
                        value = {values.code} 
                        onChange = {handleChange('code')} />
            <span className = 'focus-input' data-placeholder = "Código do Nutricionista"></span>
          </div>

          <div className = 'wrap-input'>
            <input className = {values.education !== "" ? 'has-val input' : 'input'} 
                        type = "education" 
                        value = {values.education} 
                        onChange = {handleChange('education')} />
            <span className = 'focus-input' data-placeholder = "Formação"></span>
          </div>

          <div className = 'wrap-input'>
            <input className = {values.clinic_address !== "" ? 'has-val input' : 'input'} 
                        type = "clinic_address" 
                        value = {values.clinic_address} 
                        onChange = {handleChange('clinic_address')} />
            <span className = 'focus-input' data-placeholder = "Endereço do Consultório"></span>
          </div>

          <div className = 'wrap-input'>
            <input className = {values.city !== "" ? 'has-val input' : 'input'} 
                        type = "city" 
                        value = {values.city} 
                        onChange = {handleChange('city')} />
            <span className = 'focus-input' data-placeholder = "Cidade"></span>
          </div>

          <div className = 'wrap-input'>
            <input className = {values.additional_info !== "" ? 'has-val input' : 'input'} 
                        type = "additional_info" 
                        value = {values.additional_info} 
                        onChange = {handleChange('additional_info')} />
            <span className = 'focus-input' data-placeholder = "Informações Adicionais"></span>
          </div>

          <div className = 'container-form-btn back'>
              <button onClick = {this.back} className = 'form-btn back-btn'> Voltar </button>
          </div>

          <div className = 'container-form-btn finish'>
            <button onClick = {this.continue} className = 'form-btn finish-btn'> Finalizar Cadastro </button>
          </div>
          <div className='container-dot'>
            <span class="dot inactive"></span>
            <span class="dot active"></span>
          </div>
        </div>
      </div>
    )
  }
}

export default Additional;