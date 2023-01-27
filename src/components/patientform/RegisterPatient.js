/* eslint-disable default-case */
import React, { Component } from 'react';
import PersonalDetails from './PersonalDetails';
import Measurements from './Measurements';
import ExtraInfo from './ExtraInfo';
import Confirmation from './Confirmation';

import End from './End';


export class RegisterPatient extends Component {
    state = {
        step: 1,
        name: '',
        email: '',
        phone: '',
        id: '',
        birthday: '',
        gender: '',
        height: '',
        weight: '',
        bmi: '',
        goal: '',
        weight_goal: '',
        bf: '',
        diseases: '',
        intolerances: '',
        allergies: '',
        sleep_hours: '',
        food_dislikes: '',
        food_restrictions: '',
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
    const { step } = this.state;
    const { name, email,
            phone, id,
            birthday, gender, 
            height, weight, bmi, goal,
            weight_goal, bf, diseases, intolerances,
            allergies, sleep_hours, food_dislikes, food_restrictions} = this.state;
    const values = { name, email,
        phone, id,
        birthday, gender, 
        height, weight, bmi, goal,
        weight_goal, bf, diseases, intolerances,
        allergies, sleep_hours, food_dislikes, food_restrictions}
        
    switch (step) {
        case 1:
            return (
                <PersonalDetails 
                    next_step = {this.next_step}
                    handleChange = {this.handleChange}
                    values = {values}
                />
            )
        case 2:
            return (
                <Measurements 
                    next_step = {this.next_step}
                    prev_step = {this.prev_step}
                    handleChange = {this.handleChange}
                    values = {values}
                />
            )

        case 3:
            return (
                <ExtraInfo 
                    next_step = {this.next_step}
                    prev_step = {this.prev_step}
                    handleChange = {this.handleChange}
                    values = {values}
                />
            )

        case 4:
            return (
                <Confirmation 
                    next_step = {this.next_step}
                    prev_step = {this.prev_step}
                    values = {values}
                />
            )
        
        case 5:
            return (
                <End />
            )
        
    }
  }
}

export default RegisterPatient