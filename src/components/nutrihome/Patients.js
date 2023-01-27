import { useState } from "react";
import '../styles/patient.css';
import TextField from "@mui/material/TextField";
import List from "../../components/dummies/List";



export default function Patients() {

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };

    return (
      <div className='cont-patients'>
        <div className='cont-patient-list'>
          <div className= 'search'>
            <TextField
              id= "outlined-basic"
              onChange = {inputHandler}
              variant= "outlined"
              fullWidth
              label= "Selecione o paciente"
            />
          </div>
          <List input = {inputText} />
        </div>
        <div className='cont-patient-data'>
          <div className="patient-details">
            <span className = 'patient-icon'>
              <img src = {'/images/user_icon.png'} alt = "icon"/>
            </span>
            <ul className='patient-list-config'>
              <li className='patient-item'>Nome</li>
              <li className='patient-item'>Email</li>
              <li className='patient-item'>Idade</li>
              <li className='patient-item'>Sexo</li>
              <li className='patient-item'>Altura</li>
              <li className='patient-item'>Peso</li>
              <li className='patient-item'>Objetivo</li>
            </ul>
            <div className = 'container-record-btn record-update'>
              <button className = 'record-btn record-update-btn'> Atualizar Ficha </button>
            </div>
          </div>
        </div>
      </div>
    )
}

