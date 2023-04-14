/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './signup.css';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { CircularProgress } from '@mui/material';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cod, setCod] = useState('');
  const [graduation, setGraduation] = useState('');
  const [address, setAddress] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const { signUp, loadingAuth } = useContext(AuthContext);

  const validateForm = () => {
    let formIsValid = true;
    return formIsValid;
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (name !== '' && email !== '' && password !== '') {
      signUp(name, email, password, cod, graduation, address, additionalInfo);
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
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="input "
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="input "
            type="text"
            placeholder="Codigo do Nutri"
            value={cod}
            onChange={(e) => setCod(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="Formação Acadêmica"
            value={graduation}
            onChange={(e) => setGraduation(e.target.value)}
          />
          <input
            className="input "
            type="text"
            placeholder="Endereço do Consultório"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            className="input "
            type="text"
            placeholder="Informações Adicionais"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
          />

          <div className="login-btn">
            {loadingAuth ? (
              <CircularProgress color="success" />
            ) : (
              <button type="submit" className="form-btn">
                {' '}
                Cadastrar{' '}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
