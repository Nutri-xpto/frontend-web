import React, { Component } from 'react'
import '../styles/login.css'

export class ExtraInfo extends Component {
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
            <input className = {values.diseases !== "" ? 'has-val input' : 'input'} 
                        type = "diseases" 
                        value = {values.diseases} 
                        onChange = {handleChange('diseases')} />
            <span className = 'focus-input' data-placeholder = "Tem alguma doença?"></span>
          </div>

          <div className = 'wrap-input'>
            <input className = {values.intolerances !== "" ? 'has-val input' : 'input'} 
                        type = "intolerances" 
                        value = {values.intolerances} 
                        onChange = {handleChange('intolerances')} />
            <span className = 'focus-input' data-placeholder = "Tem alguma intolerância?"></span>
          </div>

          <div className = 'wrap-input'>
            <input className = {values.allergies !== "" ? 'has-val input' : 'input'} 
                        type = "allergies" 
                        value = {values.allergies} 
                        onChange = {handleChange('allergies')} />
            <span className = 'focus-input' data-placeholder = "Tem alguma alergia?"></span>
          </div>

          <div className = 'wrap-input'>
            <input className = {values.sleep_hours !== "" ? 'has-val input' : 'input'} 
                        type = "sleep_hours" 
                        value = {values.sleep_hours} 
                        onChange = {handleChange('sleep_hours')} />
            <span className = 'focus-input' data-placeholder = "Dorme quantas horas por dia?"></span>
          </div>

          <div className = 'wrap-input'>
            <input className = {values.food_dislikes !== "" ? 'has-val input' : 'input'} 
                        type = "food_dislikes" 
                        value = {values.food_dislikes} 
                        onChange = {handleChange('food_dislikes')} />
            <span className = 'focus-input' data-placeholder = "O que não gosta de comer?"></span>
          </div>

          <div className = 'wrap-input'>
            <input className = {values.food_restrictions !== "" ? 'has-val input' : 'input'} 
                        type = "food_restrictions" 
                        value = {values.food_restrictions} 
                        onChange = {handleChange('food_restrictions')} />
            <span className = 'focus-input' data-placeholder = "Tem alguma restrição?"></span>
          </div>

          <div className = 'container-form-btn back'>
              <button onClick = {this.back} className = 'form-btn back-btn'> Voltar </button>
          </div>

          <div className = 'container-form-btn finish'>
            <button onClick = {this.continue} className = 'form-btn finish-btn'> Finalizar Cadastro </button>
          </div>
          <div className='container-dot'>
            <span class="dot inactive"></span>
            <span class="dot inactive"></span>
            <span class="dot active"></span>
          </div>
        </div>
      </div>
    )
  }
}

export default ExtraInfo;