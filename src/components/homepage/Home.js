import React from 'react'
import '../styles/homepage.css'
import {NavLink} from 'react-router-dom'


const Home = () =>  {
    return (
    <div className = 'cont'>
        <div className = 'cont-inf'>
            <div className = 'wrp-inf'>
                <span className = 'logo'>
                    <img src = {'/images/logo.png'} alt = "logo"/>
                </span>

                <h1 className='title'>Bem vindo ao MyDiet!</h1>
                <p className='subtext'>Voltado para nutricionistas e pacientes jovens
                   que ingressaram na academia com o intuito de perder ou ganhar
                   massa muscular, o MyDiet é uma aplicação web, que em conjunto
                   com um aplicativo mobile, visa conectar o nutricionista ao 
                   paciente, oferecendo funcionalidades que auxiliem o 
                   mesmo a atingir seus objetivos. O MyDiet oferece um sistema de
                   recompensa com o uso diário do paciente,
                   como uma maneira de adaptá-lo a uma rotina saudável 
                   com o acompanhamento de um profissional.</p>
              
              <div className = 'container-home-btn about'>
       
                  < button className = 'home-btn about-btn'> Sobre nós </button>

              </div>
              
              <div className = 'container-home-btn plans'>

                  <button className = 'home-btn plans-btn'> Planos </button>

              </div>
            </div>

            <div className='wrp'>
              <h1 className='title'> Como funcionará a interação entre paciente e nutricionista?</h1>
              <p className ='subtext'> Ao cadastrar um paciente no sistema, seguindo
              o objetivo do mesmo, o nutricionista coleta alguns dados que serão cruciais
              para montar o seu plano alimentar adequadamente. Dados como altura, peso,
              objetivo e.g. hipertrofia, são questionados durante a primeira consulta,
              de forma que o nutricionista possa criar a ficha deste paciente.</p>

              <img className='test' src = 'images/snack.jpg' alt='snacks'/>

              <p className ='subtext'> Uma vez cadastrado, o paciente poderá utilizar
              das diversas funcionalidades que o aplicativo proporciona, assim como também manter
              um acompanhamento com o nutricionista através de um bate-papo integrado.
              O nutricionista ficará a par de seu progresso dietário, fazendo recomendações
              e guiando o paciente para que ele continue em seu próprio passo.</p>
            </div>

            <div className='wrp process'>
              <h1 className='title'> Qual o processo realizado após a primeira consulta?</h1>
              <p className ='subtext'> Tendo os dados coletados na consulta
              inicial, o nutricionista cadastrará sua ficha pessoal com seus objetivos,
              rotina, preferências e restrições alimentares. Desta forma, ele pode prosseguir
              para a parte de análise, onde estudará minuciosamente as informações recebidas
              para construir um plano flexível e atrativo. </p>

              <img className='schedule' src = 'images/process.png' alt='process'/>

              <p className ='subtext'> O próximo passo é o feedback do nutricionista para
              o paciente, pelo próprio aplicativo. Ele enviará, em detalhes, como funciona o 
              programa alimentar do paciente, e como ele deverá ser seguido. Neste feedback
              encontram-se informações como alimentos e quantidade, horas do dia em que serão
              consumidos e muito mais. </p>
              <p className='subtext'> Por fim, o paciente poderá entrar em contato com o 
              nutricionista para fins de dúvidas e esclarecimentos, por exemplo. A interação
              pode ser realizada a qualquer momento, rapidamente, de onde o paciente estiver.</p>
            </div>

        </div>
    </div>
    )
  
}

export default Home