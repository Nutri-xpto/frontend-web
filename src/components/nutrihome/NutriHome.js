import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/nutrihome.css';


function NutriHome(){

    return (
      <div className='cont-nutri'>
        <div className='cont-nutri-inf'>
          <div className= 'wrp-nutri-info'>
            <span className = 'icon'>
                <img src = {'/images/user_icon.png'} alt = "icon"/>
            </span>
            
            <div className='data'>
              <h1 className='head-text'>Dr. Nome do Nutricionista</h1>
              <p className='parag'>nutricionista@email.com</p>
            </div>

            <div className = 'container-btn signup'>
                  <NavLink to = "/inicio"><button className = 'nutri-btn quit-btn'> Sair </button></NavLink>
              </div>
  
              <div className = 'container-btn login'>
                <button className = 'nutri-btn edit-btn'> Editar Perfil </button>
              </div>
          </div>

          <div className='wrp-nutri-info details'>
            <div className='details-data-p'>
              <p className='detail'>Total de Pacientes </p>
              <p className= 'detail'>Total de Dietas  </p>
            </div>
          </div>

          <div className='wrp-nutri-info work'>
            <div className='details-data'> 
              <h1 className='head-text'> Sua Agenda </h1>
              <p className='parag parag-bord'></p>
              <p className='parag parag-bord'></p>
              <p className='parag parag-bord'></p>
              <p className='parag parag-bord'></p>
            </div>
          </div>
        </div>

        <div className='cont-nutri-inf-right'>
          <div className='wrp-m-info patient'>
            <span className='patients'>Seus Pacientes</span>
          </div>
          
          <div className='wrp-m-info patient-options'>
            <span  className='optionslink'><NavLink to = "/patients" className= 'text-link'>Lista de Pacientes</NavLink></span>
            <span className='optionslink'><NavLink to = "/registerpatient" className = 'text-link'>Cadastrar Novo Paciente</NavLink></span>
          </div>

          <div className='wrp-m-info diet'>
            <span className='patients'>Dietas</span>
          </div>

          <div className='wrp-m-info diet-options'>
            <span className='optionslink'><NavLink to = "/diet" className= 'text-link'>Cadastrar Dieta</NavLink></span>
            <span className='optionslink'>Alterar Dieta</span>
          </div>

          <div className='wrp-m-info chat'>
            <span className='patients'>Chat</span>
          </div>
        </div>
      </div>
          )
  
}

export default NutriHome