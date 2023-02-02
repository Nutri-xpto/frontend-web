import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './login.css';
// import Userfront from "@userfront/core";
import axios from 'axios';
import { useState } from 'react';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!this.state.email) {
      formIsValid = false;
      errors['email'] = '*Please enter your email-ID.';
    }

    if (typeof this.state.email !== 'undefined') {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (!pattern.test(this.state.email)) {
        formIsValid = false;
        errors['email'] = '*Please enter valid email-ID.';
      }
    }

    if (!this.state.password) {
      formIsValid = false;
      errors['password'] = '*Please enter your password.';
    }

    if (typeof this.state.password !== 'undefined') {
      if (
        !this.state.password.match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        formIsValid = false;
        errors['password'] = '*Please enter secure and strong password.';
      }
    }

    this.setState({
      errors: errors,
    });

    return formIsValid;
  };

  return (
    <div className="container">
      <div className="container-info">
        <div className="wrap-info">
          <form className="info-form" onSubmit={null}>
            <span className="info-form-logo">
              <img src={'/images/logo.png'} alt="logo" />
            </span>

            <div className="wrap-input">
              <input type="text" placeholder="Email" />
            </div>

            <div className="wrap-input">
              <input type="password" placeholder="Senha" />
            </div>

            <div>
              <div className="container-form-btn login">
                <NavLink to="/nutrihome">
                  <button type="submit" className="form-btn login-btn">
                    {' '}
                    Login{' '}
                  </button>
                </NavLink>
              </div>
              <div>
                <NavLink to="/signup">
                  <span className="signup-btn">
                    {' '}
                    Não tem uma conta? Cadastre-se aqui!{' '}
                  </span>
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
