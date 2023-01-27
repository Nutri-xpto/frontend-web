import React, { Component } from 'react'
import '../styles/login.css'

export class PersonalDetails extends Component {
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
                <input className = {values.birthday !== "" ? 'has-val input' : 'input'} 
                       type = "date"
                       value = {values.birthday} 
                       onChange = {handleChange('birthday')} />
                <span className = 'focus-input focus-input-date' data-placeholder = "Data de Nascimento"></span>
              </div>

              <div className = 'wrap-input'>
                <input className = {values.phone !== "" ? 'has-val input' : 'input'} 
                       type = "phone" 
                       value = {values.phone} 
                       onChange = {handleChange('phone')} />
                <span className ='focus-input' data-placeholder = "Telefone"></span>
              </div>

              <div className = 'wrap-input'>
                <input className = {values.id !== "" ? 'has-val input' : 'input'} 
                       type = "id" 
                       value = {values.id} 
                       onChange = {handleChange('id')} />
                <span className ='focus-input' data-placeholder = "CPF"></span>
              </div>

              <div className = 'wrap-input'>
                <input className = {values.gender !== "" ? 'has-val input' : 'input'} 
                       type = "gender" 
                       value = {values.gender} 
                       onChange = {handleChange('gender')} />
                <span className ='focus-input' data-placeholder = "Sexo"></span>
              </div>
              
  
              <div className = 'container-form-btn next'>
                <button onClick = {this.continue} className ='form-btn next-btn'> Próxima Etapa </button>
              </div>
            </form>

            <div className='container-dot'>
              <span class="dot active"></span>
              <span class="dot inactive"></span>
              <span class="dot inactive"></span>
            </div>
          </div>
        </div>
        </div>
    )
  }
}

export default PersonalDetails