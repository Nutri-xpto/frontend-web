import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './signin.css';
import { useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import { CircularProgress } from '@mui/material';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, loadingAuth } = useContext(AuthContext);

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

  function handleSubmit(e) {
    e.preventDefault();

    if (email !== '' && password !== '') {
      signIn(email, password);
    }
  }

  return (
    <div className="container-info">
      <div className="wrap-info">
        <form className="info-form" onSubmit={handleSubmit}>
          <span className="info-form-logo">
            <img src={'/images/logo.png'} alt="logo" />
          </span>

          <input
            className="input"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input "
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="login-btn">
            <div>
              {loadingAuth ? (
                <CircularProgress color="success" />
              ) : (
                <button type="submit" className="form-btn">
                  {' '}
                  Login{' '}
                </button>
              )}
            </div>
            <div>
              <NavLink className="signup-btn" to="/signup">
                <span> Não tem uma conta? Cadastre-se aqui! </span>
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
