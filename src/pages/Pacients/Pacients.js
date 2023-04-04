import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import './pacients.css';
import { FiLogOut, FiUpload, FiUser, FiUsers } from 'react-icons/fi';
import { AuthContext } from '../../contexts/auth';
import { useContext, useEffect, useState } from 'react';
import avatar from '../../assets/user_icon.png';
import firebase from '../../services/firabaseConnection';
import List from '../../../src/components/dummies/List';
import { CircularProgress, Grid, TextField } from '@mui/material';
import pacientService from '../../services/pacienteService';
import { Container } from '@mui/system';
import PacientsCard from '../../components/pacient/PacientsCard';

export default function Pacients() {
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

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  async function loadPacients() {
    await firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('pacients')
      .get()
      .then((snapshot) => {
        let lista = [];
        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            name: doc.data().name,
            age: doc.data().age,
            phone: doc.data().phone,
            cpf: doc.data().cpf,
            gender: doc.data().gender,
            goal: doc.data().goal,
            height: doc.data().height,
            weight: doc.data().weight,
            imc: doc.data().imc,
            bioimpedance: doc.data().bioimpedance,
            diseaseHistory: doc.data().diseaseHistory,
            additionalInf: doc.data().additionalInf,
            email: doc.data().email,
            password: doc.data().password,
            imagePerfil: doc.data().imagePerfil,
          });
        });

        if (lista.length === 0) {
          setPacients([]);
          console.log('pacients', pacients);
          return;
        }
        setPacients(lista);
      })
      .catch((e) => {
        console.log(e);
        alert('Ocorreu algum erro ao pesquisar os pacientes');
        setPacients([]);
      });
  }

  useEffect(() => {
    loadPacients();
  }, []);

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
    loadPacients();
  }

  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Pacientes">
          <FiUsers size={25} />
        </Title>

        <div className="cont-patient-record">
          <div className="search-field-area">
            <TextField
              className="search-pacients"
              id="outlined-basic"
              onChange={inputHandler}
              variant="outlined"
              label="Selecione o paciente"
            />
          </div>
          <Container maxWidth="xg">
            <Grid container>
              <PacientsCard input={inputText} pacients={pacients} />
            </Grid>
          </Container>
        </div>

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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
