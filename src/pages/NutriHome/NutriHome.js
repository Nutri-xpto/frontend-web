import { CircularProgress, Divider, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import {
  FiDelete,
  FiHome,
  FiPlus,
  FiUserCheck,
  FiCalendar,
  FiX,
} from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import { AuthContext } from '../../contexts/auth';
import './nutrihome.css';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  LocalizationProvider,
  MobileDateTimePicker,
  DatePicker,
} from '@mui/x-date-pickers/';
import firebase from '../../services/firabaseConnection';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { hasUnreliableEmptyValue } from '@testing-library/user-event/dist/utils';
import ptBR from 'date-fns/locale/pt-BR';

dayjs.locale('pt-br');
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  borderRadius: 5,
  bgcolor: 'white',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

function NutriHome() {
  const { signOut, user } = useContext(AuthContext);
  const [pacients, setPacients] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [isLoadingPacients, setLoadingPacients] = useState(true);
  const [pacientSelected, setPacientSelected] = useState(0);
  const [scheduledPacients, setScheduledPacients] = useState([]);
  const [isLoadingScheduledPacients, setIsLoadingScheduledPacients] =
    useState(true);
  const [date, setDate] = useState('');
  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpenFilter = () => setOpenFilter(true);
  const handleClose = () => setOpen(false);
  const handleCloseFilter = () => setOpenFilter(false);

  function handleSelect() {
    if (pacients.length === 0) {
      return <span>Sem pacientes cadastrados</span>;
    }

    return (
      <select
        value={pacientSelected}
        onChange={(e) => {
          setPacientSelected(e.target.value);
        }}
      >
        {isLoadingPacients ? (
          <CircularProgress />
        ) : (
          pacients.map((item, index) => {
            return (
              <option key={item.id} value={index}>
                {item.name}
              </option>
            );
          })
        )}
      </select>
    );
  }

  function handleTable() {
    if (pacients.length === 0) {
      console.log(pacients);
      return <h1> Sem pacientes cadastrados</h1>;
    }

    if (scheduledPacients.length === 0) {
      return <h1> Sem pacientes agendados</h1>;
    }

    if (isLoadingScheduledPacients) {
      return (
        <div className="loading-scheduled-pacients">Carregando pacientes</div>
      );
    } else {
      console.log('aquiii', scheduledPacients);
      return scheduledPacients.map((item, index) => {
        return (
          <tbody>
            <tr key={item.pacient.id}>
              <td data-label="Paciente"> {item.pacient.name}</td>
              <td data-label="Ficha do Paciente">
                <Link className="link"> Abrir Ficha</Link>
              </td>
              <td data-label="Data"> {item.date}</td>
              <td data-label="Horário"> {item.hour}</td>
              <td data-label="#">
                <button>
                  {' '}
                  <FiUserCheck />
                </button>
              </td>
            </tr>
          </tbody>
        );
      });
    }
  }

  function handleTableToDay() {
    const today = dayjs(new Date()).format('DD/MM/YYYY').toString();
    if (pacients.length === 0) {
      console.log(pacients);
      return <h1> Sem pacientes cadastrados</h1>;
    }

    if (scheduledPacients.length === 0) {
      return <h1> Sem pacientes agendados</h1>;
    }

    if (isLoadingScheduledPacients) {
      return (
        <div className="loading-scheduled-pacients">Carregando pacientes</div>
      );
    } else {
      console.log('aquiii', scheduledPacients);
      return scheduledPacients.map((item, index) => {
        if (item.date == today) {
          return (
            <tbody>
              <tr key={item.pacient.id}>
                <td data-label="Paciente"> {item.pacient.name}</td>
                <td data-label="Ficha do Paciente">
                  <Link className="link"> Abrir Ficha</Link>
                </td>
                <td data-label="Horário"> {item.hour}</td>
                <td data-label="#">
                  <button>
                    {' '}
                    <FiUserCheck />
                  </button>
                </td>
              </tr>
            </tbody>
          );
        }
      });
    }
  }

  async function handleRegister() {
    await firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('scheduledPacientsDaily')
      .add({
        pacient: pacients[pacientSelected],
        date: dayjs(date).format('DD/MM/YYYY').toString(), //Trouxe a formatação da hora para aaqui
        hour: dayjs(date).format('HH:mm').toString(), //Trouxe a formatação da hora para aaqui
        date_order: dayjs(date).format('YYYY/MM/DD HH:mm').toString(),
      })
      .then(() => {
        alert('Paciente Agendado');
        setOpen(false);
        setDate('');
        loadScheduledPacients();
      })
      .catch((error) => {
        console.log(error);
        alert('Ocorreu algum erro. Tente novamente!');
      });
  }
  async function loadScheduledPacients(e) {
    await firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('scheduledPacientsDaily')
      .orderBy('date_order', 'asc')
      .get()
      .then((snapshot) => {
        let lista = [];
        snapshot.forEach((doc) => {
          lista.push({
            pacient: doc.data().pacient,
            date: doc.data().date,
            hour: doc.data().hour,
          });
        });
        if (lista.length === 0) {
          setScheduledPacients([]);
          setIsLoadingScheduledPacients(false);
          console.log('pacients', pacients);
          return;
        }
        setScheduledPacients(lista);
        setIsLoadingScheduledPacients(false);
      })
      .catch((e) => {
        console.log(e);
        alert('Ocorreu algum erro ao pesquisar os pacientes');
        setScheduledPacients([]);
        setIsLoadingScheduledPacients(false);
      });
  }

  async function filterScheduledPacients() {
    const dateFilter = dayjs(date).format('DD/MM/YYYY').toString();
    await firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('scheduledPacientsDaily')
      .where('date', '==', dateFilter)
      .get()
      .then((snapshot) => {
        let lista = [];
        snapshot.forEach((doc) => {
          lista.push({
            pacient: doc.data().pacient,
            date: doc.data().date,
            hour: doc.data().hour,
          });
        });
        if (lista.length === 0) {
          setScheduledPacients([]);
          setIsLoadingScheduledPacients(false);
          console.log('pacients', pacients);
          return;
        }
        setScheduledPacients(lista);
        setIsLoadingScheduledPacients(false);
      })
      .catch((e) => {
        console.log(e);
        alert('Ocorreu algum erro ao pesquisar os pacientes');
        setScheduledPacients([]);
        setIsLoadingScheduledPacients(false);
      });
    setOpenFilter(false);
    setDate('');
  }

  // async function handleDeleteScheduledPacient(pacientId) {
  //   await firebase
  //     .firestore()
  //     .collection('users')
  //     .doc(user.uid)
  //     .collection('scheduledPacientsDaily')
  //     .get()
  //     .then((docRef) => {
  //       await firebase
  //       .firestore()
  //       .collection('scheduledPacientsDaily')
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       alert('Ocorreu algum erro ao tentar remover um paciente da agenda');
  //     });
  // }

  // async function handleUpdate(index) {
  //   await firebase
  //     .firestore()
  //     .collection('users')
  //     .doc(user.uid).co
  //     .update({
  //       scheduledPacientsDaily: scheduledPacients.splice(index, 1),
  //     })
  //     .then(() => {
  //       alert('Paciente removido');
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       alert('Ocorreu um erro');
  //     });
  // }

  useEffect(() => {
    loadScheduledPacients();
  }, []);

  useEffect(() => {
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
            setLoadingPacients(false);
            console.log('pacients', pacients);
            return;
          }
          setPacients(lista);
          setLoadingPacients(false);
        })
        .catch((e) => {
          console.log(e);
          alert('Ocorreu algum erro ao pesquisar os pacientes');
          setPacients([]);
          setLoadingPacients(false);
        });
    }

    async function loadTemplates() {
      await firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .collection('templates')
        .get()
        .then((snapshot) => {
          let lista = [];
          snapshot.forEach((doc) => {
            lista.push({
              dietName: doc.data().dietName,
              description: doc.data().description,
              day: doc.data().day,
              hour: doc.data().hour,
              mealName: doc.data().mealName,
              ingredients: doc.data().ingredients,
              quantity: doc.data().quantity,
              prepar: doc.data().prepar,
            });
          });

          if (lista.length === 0) {
            setTemplates([]);
            console.log('templates1', templates);
            return;
          }
          setTemplates(lista);
        })
        .catch((e) => {
          console.log(e);
          alert('Ocorreu algum erro ao pesquisar os pacientes');
          setTemplates([]);
        });
    }
    loadTemplates();
    loadPacients();
  }, []);

  return (
    <div>
      <Header />
      <div className="content">
        <Title name={`Seja Bem-Vindo, ${user.name}!`}>
          <FiHome size={25} />
        </Title>

        <div className="info">
          <div>
            <div className="info-cards-area">
              <div className="card-info">
                <span> Total de pacientes</span>
                <div className="pacients-info">
                  <h1> {pacients.length}</h1>
                  <p> pacientes</p>
                </div>
              </div>
              <div className="card-info">
                <span> Templates de Dietas</span>
                <div className="pacients-info">
                  <h1> {templates.length}</h1>
                  <p> templates</p>
                </div>
              </div>
            </div>
            <button className="register-diet-pacient">
              <h1>
                <FiPlus />
                Cadastrar Paciente e Dieta
              </h1>
              <p>
                Faça todo o processo de registro a partir daqui de forma simples
              </p>
            </button>
          </div>

          <div className="schedulle">
            <div className="scheduller-head">
              <span> Pacientes agendados para hoje</span>
              <button onClick={handleOpen}>
                <FiPlus /> Agendar Paciente
              </button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Agendamento do paciente
                  </Typography>
                  <div className="modal-area">
                    <div className="modal-content">
                      <label>Selecione o Paciente</label>
                      {handleSelect()}
                      <label>Defina o Horário</label>
                      <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        locale="pt-br"
                      >
                        <MobileDateTimePicker
                          label="Selecione Data e Hora"
                          inputFormat="DD/MM/YYYY HH:mm"
                          cancelLabel="Cancelar"
                          okLabel="OK"
                          format="dd/MM/yyyy HH:mm"
                          disablePast={true}
                          value={date}
                          onChange={(newValue) => {
                            const date = new Date(newValue);
                            setDate(date);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </div>
                    <button onClick={handleRegister} className="modal-btn">
                      Agendar
                    </button>
                  </div>
                </Box>
              </Modal>
            </div>

            <Divider color="#58692" />
            <div>
              {scheduledPacients.length === 0 ? (
                <h1> Sem pacientes agendados</h1>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th scope="col"> Paciente </th>
                      <th scope="col"> Ficha do Paciente </th>
                      <th scope="col"> Horário </th>
                      <th scope="col"> Consulta concluída </th>
                    </tr>
                  </thead>
                  {handleTableToDay()}
                </table>
              )}
            </div>
          </div>
        </div>
        <div className="schedulleMonthly">
          <div className="scheduller-head-Monthly">
            <span> Pacientes agendados</span>
            <div className="scheduller-head-botton-Monthly">
              <button onClick={handleOpenFilter}>
                <FiCalendar /> Filtrar Data
              </button>
              <button id="desfiltrar" onClick={loadScheduledPacients}>
                <FiX />
              </button>
            </div>
            <Modal
              open={openFilter}
              onClose={handleCloseFilter}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                ></Typography>
                <div className="modal-area">
                  <div className="modal-content">
                    <label>Defina a Data</label>
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      locale="pt-br"
                    >
                      <DatePicker
                        label="Selecione a Data"
                        inputFormat="DD/MM/YYYY"
                        cancelLabel="Cancelar"
                        okLabel="OK"
                        format="DD/MM/YYYY"
                        language="pt-br"
                        value={date}
                        onChange={(newValue) => {
                          const date = new Date(newValue);
                          setDate(date);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </div>
                  <button
                    onClick={filterScheduledPacients}
                    className="modal-btn"
                  >
                    Filtrar
                  </button>
                </div>
              </Box>
            </Modal>
          </div>

          <Divider color="#58692" />
          <div>
            {scheduledPacients.length === 0 ? (
              <h1> Sem pacientes agendados</h1>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th scope="col"> Paciente </th>
                    <th scope="col"> Ficha do Paciente </th>
                    <th scope="col"> Data </th>
                    <th scope="col"> Horário </th>
                    <th scope="col"> Consulta concluída </th>
                  </tr>
                </thead>
                {handleTable()}
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NutriHome;
