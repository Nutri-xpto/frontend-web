/* eslint-disable default-case */
import React, { Component } from 'react';
import Details from './Details';
import Additional from './Additional';
import Confirm from './Confirm';
import Success from './Success';
import axios from 'axios';


export class Register extends Component {
    constructor (props) {
        super(props);
        this.state = {
            step: 1,
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            code: '',
            education: '',
            clinic_address: '',
            city: '',
            additional_info: '',
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitUserRegistrationForm = this.submitUserRegistrationForm.bind(this);
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

    submitUserRegistrationForm(e) {
        e.preventDefault();
        
        if (this.validateForm()) {
          console.log(this.state);
          var apiBaseUrl = "http://localhost:8080/api/";
    
          var data = {
            "email":this.state.email,
            "password":this.state.password 
          }
        
          var headers = {
            'Content-Type': 'application/json',
          }
        
          console.log(data);
          axios.post(apiBaseUrl+'login', data, {headers: headers}).then(function (response) {
            console.log(response);
            
            if(response.data.success){
              localStorage.setItem("u_code", encodeURIComponent(JSON.stringify(response.data.data)));
              localStorage.setItem('is_done', true);
              window.location.href = "/";
              console.log("Login successfull");
        
            } else {
              alert(response.data.message);
            }
    
          }).catch(function (error) {
            console.log(error);
          });
        }
      }
      
      validateForm() {
        let errors = {};
        let formIsValid = true;
    
        if (!this.state.email) {
          formIsValid = false;
          errors["email"] = "*Please enter your email-ID.";
        }
        
        if (typeof this.state.email !== "undefined") {
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          
          if (!pattern.test(this.state.email)) {
            formIsValid = false;
            errors["email"] = "*Please enter valid email-ID.";
          }
        }
        
        if (!this.state.password) {
          formIsValid = false;
          errors["password"] = "*Please enter your password.";
        }
        
        if (typeof this.state.password !== "undefined") {
          if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            errors["password"] = "*Please enter secure and strong password.";
          }
        }
        
        this.setState({
          errors: errors
        });
        
        return formIsValid;
      }


    render() {
        const { step } = this.state;
        const { name, email,
            password, password_confirmation,
            code, education, 
            clinic_address, city, additional_info} = this.state;
        const values = { name, email,
            password, password_confirmation,
            code, education, 
            clinic_address, city, additional_info}
        
        switch (step) {
            case 1:
                return (
                <Details 
                    next_step = {this.next_step}
                    handleChange = {this.handleChange}
                    values = {values}
                />
                )
            case 2:
                return (
                <Additional 
                    next_step = {this.next_step}
                    prev_step = {this.prev_step}
                    handleChange = {this.handleChange}
                    values = {values}
                />
                )

            case 3:
                return (
                <Confirm 
                    next_step = {this.next_step}
                    prev_step = {this.prev_step}
                    values = {values}
                />
                )
        
            case 4:
                return (
                <Success />
                )
        
        }
    }
}

export default Register