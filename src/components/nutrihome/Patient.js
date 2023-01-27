import React from 'react'
import '../styles/patient.css';


export default function Patient() {
  return (
    <div className='cont-patients'>
        <div className='cont-patient-list info'>
            <div className='patient-info'>
                <span className = 'patient-record-icon'>
                    <img src = {'/images/user_icon.png'} alt = "icon"/>
                </span>
                <div className='patient-card-data'>
                    <h1 className = 'patient-name'>Paciente</h1>
                    <p className = 'patient-email'>paciente@email.com</p>
                </div>
            </div>

            <div className = "patient-record">

                <div className ='patient-wrap-input'>
                    <p>Nome</p>
                    <input className =  {'patient-input'}
                       type = "text"   />
                    <span className ='patient-input-style' data-placeholder = ""></span>
                </div>
                
                <div className ='patient-wrap-input'>
                    <p>Altura</p>
                    <input className =  {'patient-input'}
                       type = "text"   />
                    <span className ='patient-input-style' data-placeholder = ""></span>
                </div>

                <div className ='patient-wrap-input'>
                    <p>E-mail</p>
                    <input className =  {'patient-input'}
                       type = "text"   />
                    <span className ='patient-input-style' data-placeholder = ""></span>
                </div>
                
                <div className ='patient-wrap-input'>
                <p>Peso</p>
                    <input className =  {'patient-input'}
                       type = "text"   />
                    <span className ='patient-input-style' data-placeholder = ""></span>
                </div>

                <div className ='patient-wrap-input'>
                    <p>Altura</p>
                    <input className =  {'patient-input'}
                       type = "text"   />
                    <span className ='patient-input-style' data-placeholder = ""></span>
                </div>
                
                <div className ='patient-wrap-input'>
                    <p>Circunf. Abdominal</p>
                    <input className =  {'patient-input'}
                       type = "text"   />
                    <span className ='patient-input-style' data-placeholder = ""></span>
                </div>

                <div className ='patient-wrap-input'>
                    <p>Sexo</p>
                    <input className =  {'patient-input'}
                       type = "text"   />
                    <span className ='patient-input-style' data-placeholder = ""></span>
                </div>
                
                <div className ='patient-wrap-input'>
                    <p>Circunf. Braço</p>
                    <input className =  {'patient-input'}
                       type = "text"   />
                    <span className ='patient-input-style' data-placeholder = ""></span>
                </div>

                <div className ='patient-wrap-input'>
                    <p>Objetivo</p>
                    <input className =  {'patient-input'}
                       type = "text"   />
                    <span className ='patient-input-style' data-placeholder = ""></span>
                </div>
                
                <div className ='patient-wrap-input'>
                    <p>Gordura Corporal (%)</p>
                    <input className =  {'patient-input'}
                       type = "text"   />
                    <span className ='patient-input-style' data-placeholder = ""></span>
                </div>

                <div className ='patient-wrap-input'>
                    <p>Info. Adicional</p>
                    <input className =  {'patient-input'}
                       type = "text"   />
                    <span className ='patient-input-style' data-placeholder = ""></span>
                </div>
                
                <div className ='patient-wrap-input'>
                    <p>Alergia e afins</p>
                    <input className =  {'patient-input'}
                       type = "text"   />
                    <span className ='patient-input-style' data-placeholder = ""></span>
                </div>
            </div>
        </div>

        <div className='cont-patient-data extra'>
            <div className='extra-content goals'>
                <div className='patient-card-data'>
                    <h1> Meta </h1>
                    <div className='goals-card-data'>
                        <p> Metas </p>
                    </div>
                    <div className ='goals-wrap-input'>
                        <p>Refeições Não Cumpridas</p>
                        <input className =  {'meals' !== '' ? 'new-val goals-input' : 'goals-input'}
                        type = "text"   />
                        <span className ='goals-input-style' data-placeholder = ""></span>
                        <label class="form-control">
                            <input type="checkbox" name="checkbox" />
                        </label>
                    </div>

                    <div className ='goals-wrap-input'>
                        <p>Peso</p>
                        <input className =  {'weight' !== '' ? 'new-val goals-input' : 'goals-input'}
                        type = "text"   />
                        <span className ='goals-input-style' data-placeholder = "Peso"></span>
                        <label class="form-control">
                            <input type="checkbox" name="checkbox" />  
                        </label>
                        <p className='extra-text more'>+ Adicionar mais metas</p>
                    </div>


                    <div className = 'container-goal-btn discard'>
                        <button className = 'goal-btn discard-btn'> Descartar Meta </button>
                    </div>
  
                    <div className = 'container-goal-btn close'>
                        <button className = 'goal-btn close-btn'> Fechar Meta </button>
                    </div>
                </div>
            </div>

            <p className='extra-text'> + Adicionar nova meta</p>
            <div className='extra-content store'>
                <div className='patient-card-data'>
                    <h1 className = 'goals-store'> Loja</h1>
                    <p className = 'extra-text-store'>Itens Adquiridos</p>
                    <p className='store store-items'></p>
                    <p className='store store-items'></p>
                    <p className='store store-items'></p>
                    <p className='store store-items'></p>

                </div>
            </div>
        </div>
    </div>
  )
}
