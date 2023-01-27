import React, { Component } from 'react'
import NewDietForm from './NewDietForm';
import Finished from './Finished';

export class NewDiet extends Component {
    state = {
        step: 1,
        patientName: '',
        day: '',
        time: '',
        name: '',
        ingredients: '',
        instructions: ''
    }

    // Next Step
    next_step = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Previous step
    prev_step = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle change
    handleChange = input => e => {
        this.setState ({[input]: e.target.value}); 
    }
  
  render() {
    const {step} = this.state;
    const {patientName, day, time, name, ingredients, instructions} = this.state;
    const values = {patientName, day, time, name, ingredients, instructions}
    switch (step) {
        case 1:
            return (
                <NewDietForm 
                    next_step = {this.next_step}
                    handleChange = {this.handleChange}
                    values = {values}
                />
            )
        case 2:
            return (
                <Finished />
            )
        default:
            
    }
  }
}

export default NewDiet