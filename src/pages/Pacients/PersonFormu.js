import React from 'react';
import { CircularProgress } from '@mui/material';
import firebase from '../../services/firabaseConnection';
import { AuthContext } from '../../contexts/auth';

import pacientService from '../../services/pacienteService';
import { useContext, useEffect, useState } from 'react';

export default function PersonFormu() {
  const { user } = useContext(AuthContext);
  const [pacients, setPacients] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [gender, setGender] = useState('');
  const [goal, setGoal] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [imc, setImc] = useState('');
  const [bioimpedance, setBioimpedance] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [diseaseHistory, setDiseaseHistory] = useState('');
  const [additionalInf, setAdditionalInfo] = useState('');
  const [inputText, setInputText] = useState('');

  async function handleAdd(e) {
    e.preventDefault();
    setIsLoading(true);
    await pacientService.registerPacient(
      user.uid,
      name,
      age,
      phone,
      cpf,
      gender,
      goal,
      height,
      weight,
      imc,
      bioimpedance,
      diseaseHistory,
      additionalInf,
      email,
      password
    );
    setIsLoading(false);
    setName('');
    setAge('');
    setDiseaseHistory('');
    setPhone('');
    setCpf('');
    setGender('');
    setGoal('');
    setHeight('');
    setWeight('');
    setImc('');
    setBioimpedance('');
    setAdditionalInfo('');
    setEmail('');
    setPassword('');
  }

  return (
    <div className="container">
      <h1> Cadastrar Novo Paciente</h1>
      <form className="form-profile" onSubmit={handleAdd}>
        <div className="form-pair">
          <div className="form-inputs">
            <label>Nome</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-inputs">
            <label>Idade</label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </div>

        <div className="form-pair">
          <div className="form-inputs">
            <label>Telefone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-inputs">
            <label>CPF</label>
            <input
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>
        </div>

        <div className="form-pair">
          <div className="form-inputs">
            <label>Sexo</label>
            <input
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div className="form-inputs">
            <label>Meta</label>
            <input
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
          </div>
        </div>
        <div className="form-pair">
          <div className="form-inputs">
            <label>Altura</label>
            <input
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="form-inputs">
            <label>Peso</label>
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
        </div>

        <div className="form-pair">
          <div className="form-inputs">
            <label>Imc</label>
            <input
              type="text"
              value={imc}
              onChange={(e) => setImc(e.target.value)}
            />
          </div>
          <div className="form-inputs">
            <label>Dados da Biopedancia</label>
            <input
              type="text"
              value={bioimpedance}
              onChange={(e) => setBioimpedance(e.target.value)}
            />
          </div>
        </div>

        <div className="form-pair">
          <div className="form-inputs">
            <label>Histórico de Saúde</label>
            <input
              type="text"
              value={diseaseHistory}
              onChange={(e) => setDiseaseHistory(e.target.value)}
            />
          </div>
          <div className="form-inputs">
            <label>Informações Adicionais</label>
            <input
              type="text"
              value={additionalInf}
              onChange={(e) => setAdditionalInfo(e.target.value)}
            />
          </div>
        </div>

        <div className="form-pair">
          <div className="form-inputs">
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-inputs">
            <label>Senha de Acesso</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="btn-area">
          {isLoading ? (
            <CircularProgress color="success" />
          ) : (
            <button type="submit"> Cadastrar Paciente</button>
          )}
          <button type="button"> Cadastrar Dieta</button>
        </div>
      </form>
    </div>
  );
}
