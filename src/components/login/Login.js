import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import '../styles/login.css'
// import Userfront from "@userfront/core";
import axios from 'axios';

export class Login extends Component  {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
  
    this.handleChange = this.handleChange.bind(this);
    this.submitUserRegistrationForm = this.submitUserRegistrationForm.bind(this);
  }


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
      
  render () {
    const { email,
            password} = this.state;
    const values = {email, password} ;

    return (
      <div className ='container'>
        <div className = 'container-info'>
          <div className ='wrap-info'>
            <form className ='info-form' /*method='post'*/ onSubmit={'this.submitUserRegistrationForm'} >
  
              <span className ='info-form-logo'>
                <img src = {'/images/logo.png'} alt = "logo"/>
              </span>
  
              <div className ='wrap-input'>
                <input className = {values.email !== "" ? 'has-val input' : 'input'} 
                       type = "text" 
                       value = {this.state.email} 
                       onChange = {this.handleChange('email')} />
                <span className ='focus-input' data-placeholder = "E-mail"></span>
              </div>
  
              <div className = 'wrap-input'>
                <input className = {values.password !== "" ? 'has-val input' : 'input'} 
                       type = "password" 
                       value = {this.state.password} 
                       onChange = {this.handleChange('password')} />
                <span className = 'focus-input' data-placeholder = "Senha"></span>
              </div>
  
              <div className = 'container-form-btn signup'>
                <NavLink to = "/signup">
                  <button className = 'form-btn signup-btn'> Cadastro </button>
                </NavLink>
              </div>
  
              <div className = 'container-form-btn login'>
              <NavLink to = "/nutrihome"><button className = 'form-btn login-btn'> Login </button></NavLink>
              </div>
  
            </form>
          </div>
  
        </div>
  
      </div>
      )
    }
}

export default Login