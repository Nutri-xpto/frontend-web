import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import './pacients.css';
import { FiLogOut, FiUpload, FiUser, FiUsers } from 'react-icons/fi';
import { AuthContext } from '../../contexts/auth';
import { useContext, useState } from 'react';
import avatar from '../../assets/user_icon.png';
import firebase from '../../services/firabaseConnection';
import { CircularProgress } from '@mui/material';
import pacientService from '../../services/pacienteService';

export default function Pacients() {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [diseaseHistory, setDiseaseHistory] = useState('');
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

  async function handleAdd(e) {
    e.preventDefault();
    setIsLoading(true);
    await pacientService.registerPacient(
      user.uid,
      name,
      diseaseHistory,
      phone,
      cpf,
      gender,
      goal,
      height,
      weight,
      imc,
      bioimpedance,
      email,
      password
    );
    setIsLoading(false);
    setName('');
    setDiseaseHistory('');
    setPhone('');
    setCpf('');
    setGender('');
    setGoal('');
    setHeight('');
    setWeight('');
    setImc('');
    setBioimpedance('');
    setEmail('');
    setPassword('');
  }

  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Pacientes">
          <FiUsers size={25} />
        </Title>

        <div className="container">
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
                <label>Historico de Saúde</label>
                <input
                  type="text"
                  value={diseaseHistory}
                  onChange={(e) => setDiseaseHistory(e.target.value)}
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
