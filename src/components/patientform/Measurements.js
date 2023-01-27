import React, { Component } from 'react'
import '../styles/login.css'

export class Measurements extends Component {
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
            <input className = {values.height !== "" ? 'has-val input' : 'input'} 
                        type = "height" 
                        value = {values.height} 
                        onChange = {handleChange('height')} />
            <span className = 'focus-input' data-placeholder = "Altura"></span>
          </div>

          <div className = 'wrap-input'>
            <input className = {values.weight !== "" ? 'has-val input' : 'input'} 
                        type = "weight" 
                        value = {values.weight} 
                        onChange = {handleChange('weight')} />
            <span className = 'focus-input' data-placeholder = "Peso"></span>
          </div>

          <div className = 'wrap-input'>
            <input className = {values.bmi !== "" ? 'has-val input' : 'input'} 
                        type = "bmi" 
                        value = {values.bmi} 
                        onChange = {handleChange('bmi')} />
            <span className = 'focus-input' data-placeholder = "IMC"></span>
          </div>

          <div className = 'wrap-input'>
            <input className = {values.goal !== "" ? 'has-val input' : 'input'} 
                        type = "goal" 
                        value = {values.goal} 
                        onChange = {handleChange('goal')} />
            <span className = 'focus-input' data-placeholder = "Objetivo"></span>
          </div>

          
          <div className = 'wrap-input'>
            <input className = {values.weight_goal !== "" ? 'has-val input' : 'input'} 
                        type = "weight_goal" 
                        value = {values.weight_goal} 
                        onChange = {handleChange('weight_goal')} />
            <span className = 'focus-input' data-placeholder = "Meta de Peso"></span>
          </div>

          <div className = 'wrap-input'>
            <input className = {values.bf !== "" ? 'has-val input' : 'input'} 
                        type = "bf" 
                        value = {values.bf} 
                        onChange = {handleChange('bf')} />
            <span className = 'focus-input' data-placeholder = "Gordura Corporal (%)"></span>
          </div>

          <div className = 'container-form-btn back'>
              <button onClick = {this.back} className = 'form-btn back-btn'> Voltar </button>
          </div>

          <div className = 'container-form-btn finish'>
            <button onClick = {this.continue} className = 'form-btn finish-btn'> Próxima Etapa </button>
          </div>
          <div className='container-dot'>
            <span class="dot inactive"></span>
            <span class="dot active"></span>
            <span class="dot inactive"></span>
          </div>
        </div>
      </div>
    )
  }
}

export default Measurements;