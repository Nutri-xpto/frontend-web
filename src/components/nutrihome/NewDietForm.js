import React, { Component } from 'react'
import { registerDiet } from '../../servers/DietServer';
import TextField from "@mui/material/TextField";
import List from "../../components/dummies/List";

export class NewDietForm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.next_step();
    }
    sendData = (values) => {
      registerDiet(this.props.values);
      this.continue();
    }
    constructor(props) {
      super(props)
      this.state = {
        inputText: ""
      }
    }
     inputHandler = e => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      this.state.inputText(lowerCase);
    };


    
      render() {
        const { values, handleChange } = this.props;
        return (
          <div className='cont-patients'>
          <div className='cont-patient-list'>
            <div className= 'search'>
              <TextField
                id= "outlined-basic"
                onChange = {this.state.inputHandler}
                variant= "outlined"
                fullWidth
                label= "Selecione o paciente"
              />
            </div>
            <List input = {this.state.inputText} />
          </div>
            <div className = 'container'>
            <div className = 'container-info register'>
              <div className = 'wrap-info'>
                
                <form className = 'info-form-diet' onSubmit = {'continue'}>
      
                  <span className = 'info-form-diet-logo'>
                    <img src = {'/images/logo.png'} alt = "logo"/>
                  </span>

                  <div className = 'wrap-input'>
                    <input className = {values.patientName !== "" ? 'has-val input' : 'input'} 
                           type = "patientName" 
                           value = {values.patientName} 
                           onChange = {handleChange('patientName')} />
                    <span className = 'focus-input' data-placeholder = "Nome do Paciente"></span>
                  </div>
                    
                  <div className = 'wrap-input'>
                    <input className = {values.day !== "" ? 'has-val input' : 'input'} 
                           type = "day" 
                           value = {values.day} 
                           onChange = {handleChange('day')} />
                    <span className = 'focus-input' data-placeholder = "Dia"></span>
                  </div>

                  <div className = 'wrap-input'>
                    <input className = {values.time !== "" ? 'has-val input' : 'input'} 
                           type = "timeoftheday" 
                           value = {values.time} 
                           onChange = {handleChange('time')} />
                    <span className = 'focus-input' data-placeholder = "Horário"></span>
                  </div>

                  <div className = 'wrap-input'>
                    <input className = {values.name !== "" ? 'has-val input' : 'input'} 
                           type = "name" 
                           value = {values.name} 
                           onChange = {handleChange('name')} />
                    <span className = 'focus-input' data-placeholder = "Nome da dieta"></span>
                  </div>

                  <div className = 'wrap-input'>
                    <input className = {values.ingredients !== "" ? 'has-val input' : 'input'} 
                           type = "ingredients" 
                           value = {values.ingredients} 
                           onChange = {handleChange('ingredients')} />
                    <span className = 'focus-input' data-placeholder = "Ingredientes"></span>
                  </div>

                  <div className = 'wrap-input'>
                    <input className = {values.instructions !== "" ? 'has-val input' : 'input'} 
                           type = "instructions" 
                           value = {values.instructions} 
                           onChange = {handleChange('instructions')} />
                    <span className = 'focus-input' data-placeholder = "Modo de Preparo"></span>
                  </div>


                </form>
                <div className = 'container-form-btn next'>
                    <button onClick = {this.sendData} className ='form-btn next-btn'> Cadastrar Dieta </button>
                </div>
            </div>
            </div>
            </div>
            </div>

        )
  }
}

export default NewDietForm