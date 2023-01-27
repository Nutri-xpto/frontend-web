import React from 'react'
import {NavLink} from 'react-router-dom'
import { useState } from "react";
import '../styles/diet.css';
import TextField from "@mui/material/TextField";
import List from "../../components/dummies/List";



export default function Diets() {

  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };


  return (
    <div className='cont-diets'>
        <div className='cont-patient-record'>
          <div className= 'scroll-search'>
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

        <div className='cont-patient-diet'>
           <div className='diet-details'>
                <div class="dropdown">
                  <p class="dropbtn">Segunda-Feira</p>
                  <div class="dropdown-content">
                    <div class="row">
                      <div class="diet-column">
                        <p>Horário</p>
                        <p>8:00</p>
                        <p>10:00</p>
                        <p>12:00</p>
                        <p>16:00</p>
                        <p>18:00</p>
                        <p>22:00</p>
                      </div>

                      <div class="diet-column">
                        <p>Nome</p>
                        <p></p>
                        <p></p>
                        <p></p>
                      </div>

                      <div class="diet-column">
                        <p>Receita</p>
                        <p></p>
                        <p></p>
                        <p></p>
                      </div>

                      <div class="diet-column">
                        <p>Preparo</p>
                        <p></p>
                        <p></p>
                        <p></p>
                      </div>

                    </div>
                  </div>
                </div>
           </div>

           <div className='diet-details'>
                <div class="dropdown">
                  <p class="dropbtn">Terça-Feira</p>
                  <div class="dropdown-content">
                    <div class="row">
                      <div class="diet-column">
                        <p>Horário</p>
                        <p>8:00</p>
                        <p>10:00</p>
                        <p>12:00</p>
                        <p>16:00</p>
                        <p>18:00</p>
                        <p>22:00</p>
                      </div>

                      <div class="diet-column">
                        <p>Nome</p>
                        <p></p>
                        <p></p>
                        <p></p>
                      </div>

                      <div class="diet-column">
                        <p>Receita</p>
                        <p></p>
                        <p></p>
                        <p></p>
                      </div>

                      <div class="diet-column">
                        <p>Preparo</p>
                        <p></p>
                        <p></p>
                        <p></p>
                      </div>

                    </div>
                  </div>
                </div>
           </div>

           <div className='diet-details'>
                <div class="dropdown">
                  <p class="dropbtn">Quarta-Feira</p>
                  <div class="dropdown-content">
                    <div class="row">
                      <div class="diet-column">
                        <p>Horário</p>
                        <p>8:00</p>
                        <p>10:00</p>
                        <p>12:00</p>
                        <p>16:00</p>
                        <p>18:00</p>
                        <p>22:00</p>
                      </div>

                      <div class="diet-column">
                        <p>Nome</p>
                        <p></p>
                        <p></p>
                        <p></p>
                      </div>

                      <div class="diet-column">
                        <p>Receita</p>
                        <p></p>
                        <p></p>
                        <p></p>
                      </div>

                      <div class="diet-column">
                        <p>Preparo</p>
                        <p></p>
                        <p></p>
                        <p></p>
                      </div>

                    </div>
                  </div>
                </div>
           </div>

           <div className='diet-details'>
                <div class="dropdown">
                  <p class="dropbtn">Quinta-Feira</p>
                  <div class="dropdown-content">
                    <div class="row">
                      <div class="diet-column">
                        <p>Horário</p>
                        <p>8:00</p>
                        <p>10:00</p>
                        <p>12:00</p>
                        <p>16:00</p>
                        <p>18:00</p>
                        <p>22:00</p>
                      </div>

                      <div class="diet-column">
                        <p>Nome</p>
                        <p></p>
                        <p></p>
                        <p></p>
                      </div>

                      <div class="diet-column">
                        <p>Receita</p>
                        <p></p>
                        <p></p>
                        <p></p>
                      </div>

                      <div class="diet-column">
                        <p>Preparo</p>
                        <p></p>
                        <p></p>
                        <p></p>
                      </div>

                    </div>
                  </div>
                </div>
           </div>

           <div className='diet-details'>
                <div class="dropdown">
                  <p class="dropbtn">Sexta-Feira</p>
                  <div class="dropdown-content">
                    <div class="row">
                      <div class="diet-column">
                        <p>Horário</p>
                        <p>8:00</p>
                        <p>10:00</p>
                        <p>12:00</p>
                        <p>16:00</p>
                        <p>18:00</p>
                        <p>22:00</p>
                      </div>

                      <div class="diet-column">
                        <p>Nome</p>
                        <p>Café da Manhã</p>
                        <p>Lanche da Manhã</p>
                        <p>Almoço</p>
                        <p>Café da Tarde</p>
                        <p>Snacks</p>
                        <p>Jantar</p>
                      </div>

                      <div class="diet-column">
                        <p>Receita</p>
                        <p>Pão com Ovo, Vitamina de Abacate e Flocos</p>
                        <p></p>
                        <p></p>
                      </div>

                      <div class="diet-column">
                        <p>Preparo</p>
                        <p></p>
                        <p></p>
                        <p></p>
                      </div>

                    </div>
                  </div>
                </div>
           </div>

           <div className='diet-details weekend'>
                <div class="dropdown">
                  <p class="dropbtn">Sábado</p>
                  <div class="dropdown-content">
                    <div class="row">
                      <div class="diet-column">
                        <p>Horário</p>
                        <p>8:00</p>
                        <p>10:00</p>
                        <p>12:00</p>
                        <p>16:00</p>
                        <p>18:00</p>
                        <p>22:00</p>
                      </div>

                      <div class="diet-column">
                        <p>Nome</p>
                        <p></p>
                        <p></p>
                        <p></p>
                      </div>

                      <div class="diet-column">
                        <p>Receita</p>
                        <p></p>
                        <p></p>
                        <p></p>
                      </div>

                      <div class="diet-column">
                        <p>Preparo</p>
                        <p></p>
                        <p></p>
                        <p></p>
                      </div>

                    </div>
                  </div>
                </div>
           </div>

           <div className='diet-details weekend'>
                <div class="dropdown">
                  <p class="dropbtn">Domingo</p>
                  <div class="dropdown-content">
                    <div class="row">
                      <div class="diet-column">
                        <p>Horário</p>
                        <p>8:00</p>
                        <p>10:00</p>
                        <p>12:00</p>
                        <p>16:00</p>
                        <p>18:00</p>
                        <p>22:00</p>
                      </div>

                      <div class="diet-column">
                        <p>Nome</p>
                        <p></p>
                        <p></p>
                        <p></p>
                      </div>

                      <div class="diet-column">
                        <p>Receita</p>
                        <p></p>
                        <p></p>
                        <p></p>
                      </div>

                      <div class="diet-column">
                        <p>Preparo</p>
                        <p></p>
                        <p></p>
                        <p></p>
                      </div>

                    </div>
                  </div>
                </div>
           </div>
           <div className = 'container-diet-btn new-diet'>
           <NavLink to = "/diet"><button className = 'new-diet-btn diet-btn'>Nova Dieta</button></NavLink>
           </div>
        </div>
    </div>
    
  )
}

