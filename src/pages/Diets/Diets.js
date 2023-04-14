/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import './diets.css';
import { FiAlignRight, FiDelete, FiEdit, FiPlus } from 'react-icons/fi';
import { AuthContext } from '../../contexts/auth';
import { useContext, useEffect, useState } from 'react';
import firebase from '../../services/firabaseConnection';
import { CircularProgress, Divider, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  height: '600px',
  borderRadius: 5,
  bgcolor: 'white',
  border: 'none',
  boxShadow: 24,
  p: 4,
};
const styleVisualization = {
  display: 'grid',
  gridAutoRows: '100px',
  gridTemplateColumns: 'repeat(2, 1fr)',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '65%',
  height: '70%',
  borderRadius: 5,
  bgcolor: 'white',
  border: 'none',
  boxShadow: 24,
  p: 2,
  overflowY: 'scroll',
};
const styleLine = {
  display: 'inline',
  position: 'relative',
  top: '-15px',
  left: '-10px',
};
const styleItem = {
  bg: 'primary',
  color: 'black',
  padding: 2,
  borderRadius: '10px',
  height: '25%',
  marginRight: '15px',
  marginLeft: '15px',
  marginTop: '25px',
  background: '#f5f5f5',
  border: 'none',
  display: 'flex',
};
const styleItemDescription = {
  bg: 'primary',
  color: 'black',
  padding: 2,
  borderRadius: '10px',
  height: '75%',
  marginRight: '15px',
  marginLeft: '15px',
  background: '#f5f5f5',
  border: 'none',
  display: 'flex',
  overflowY: 'scroll',
};
const styleForms = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  height: '88%',
  borderRadius: 5,
  bgcolor: 'white',
  border: 'none',
  boxShadow: 24,
  p: 4,
};
const Item = ({ children }) => <Box sx={styleItem}>{children}</Box>;
const ItemDescription = ({ children }) => (
  <Box sx={styleItemDescription}>{children}</Box>
);

export default function Diets() {
  const { user } = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  const [openModalDiet, setOpenModalDiet] = useState(false);

  const [dietName, setDietName] = useState('');
  const [description, setDescription] = useState('');
  const [day, setDay] = useState('');
  const [hour, setHour] = useState('');
  const [mealName, setMealName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [quantity, setQuantity] = useState('');
  const [prepar, setPrepar] = useState('');

  const [descriptionD, setDescriptionD] = useState('');
  const [dayD, setDayD] = useState('');
  const [hourD, setHourD] = useState('');
  const [mealNameD, setMealNameD] = useState('');
  const [ingredientsD, setIngredientsD] = useState('');
  const [quantityD, setQuantityD] = useState('');
  const [preparD, setPreparD] = useState('');

  const [diets, setDiets] = useState([]);
  const [pacients, setPacients] = useState('');
  const [pacientSelected, setPacientSelected] = useState(0);
  const [templates, setTemplates] = useState([]);
  const [templateSelected, setTemplateSelected] = useState(null);
  const [isLoadingTemplates, setIsLoadingTemplates] = useState(true);
  const [isLoadingPacients, setIsLoadingPacients] = useState(true);
  const [isLoadingDiets, setIsLoadingDiets] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [dataTemplates, setDataTemplates] = useState({ templateData: null });
  const [openTemplate, setOpenTemplate] = useState(false);
  const handleOpenTemplate = (dataTemplates) => {
    setOpenTemplate(true);
    setDataTemplates(dataTemplates);
  };
  const handleCloseTemplate = () => {
    setOpenTemplate(false);
    setDataTemplates({ templateData: null });
  };
  const [dataDiets, setDataDiets] = useState({ dietData: null });
  const [openDiet, setOpenDiet] = useState(false);
  const handleOpenDiet = (dataDiets) => {
    setOpenDiet(true);
    setDataDiets(dataDiets);
  };
  const handleCloseDiet = () => {
    setOpenDiet(false);
    setDataDiets({ dietData: null });
  };
  const [dataTampletsEdit, setDataTampletsEdit] = useState({
    tampletEditData: null,
    dietName: '',
    description: '',
    day: '',
    hour: '',
    mealName: '',
    ingredients: '',
    quantity: '',
    prepar: '',
  });
  const [dataDietsEdit, setDataDietsEdit] = useState({
    dietEditData: null,
    dietName: '',
    description: '',
    day: '',
    hour: '',
    mealName: '',
    ingredients: '',
    quantity: '',
    prepar: '',
    pacient: '',
  });
  const [openTampletEdit, setOpenTampletEdit] = useState(false);
  const [openDietEdit, setOpenDietEdit] = useState(false);
  const handleOpenTampletEdit = (dataTampletsEdit) => {
    setOpenTampletEdit(true);
    setDataTampletsEdit(dataTampletsEdit);
    console.log(dataTampletsEdit);
  };
  const handleCloseTampletEdit = () => {
    setOpenTampletEdit(false);
    setDataTampletsEdit({ tampletEditData: null });
  };
  const handleOpenDietEdit = (dataDietsEdit) => {
    setOpenDietEdit(true);
    setDataDietsEdit(dataDietsEdit);
    console.log(dataDietsEdit);
  };
  const handleCloseDietEdit = () => {
    setOpenDietEdit(false);
    setDataDietsEdit({ dietEditData: null });
  };
  function handleSelect() {
    if (pacients.length === 0) {
      return <span> Sem pacientes cadastrados</span>;
    }

    return (
      <select
        className="select-pacient-diet"
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

  useEffect(() => {
    const template = templates[templateSelected];
    console.log(template);
    if (template) {
      setDescriptionD(template.description);
      setDayD(template.day);
      setHourD(template.hour);
      setMealNameD(template.mealName);
      setIngredientsD(template.ingredients);
      setQuantityD(template.quantity);
      setPreparD(template.prepar);
    }
  }, [templateSelected]);

  function handleSelectTemplate() {
    if (templates.length === 0) {
      return <span> Sem templates cadastrados</span>;
    }

    return (
      <select
        className="select-pacient-diet"
        value={templateSelected}
        onChange={(e) => {
          setTemplateSelected(e.target.value);
        }}
      >
        {isLoadingTemplates ? (
          <CircularProgress />
        ) : (
          templates.map((item, index) => {
            return (
              <option key={item.id} value={index}>
                {item.dietName}
              </option>
            );
          })
        )}
      </select>
    );
  }

  function handleTableTemplates() {
    if (isLoadingTemplates) {
      return (
        <div className="loading-scheduled-pacients">Carregando templates</div>
      );
    } else {
      console.log('entrouaaa', templates);
      return templates.map((item, index) => {
        return (
          <tbody>
            <tr key={index}>
              <td data-label="Nome da Dieta"> {item.dietName}</td>
              <td data-label="Descrição"> {item.description}</td>
              <td data-label="Ficha do Paciente">
                <Link className="link">
                  <a onClick={() => handleOpenTemplate(item)}>Abrir Template</a>
                  <Modal open={openTemplate} onClose={handleCloseTemplate}>
                    <Box sx={styleVisualization}>
                      <Typography
                        id="modal-modal-title"
                        variant="h4"
                        component="h2"
                      >
                        Template
                      </Typography>
                      <Typography variant="h4"></Typography>
                      <Item>
                        <Box sx={styleLine}>Nome</Box>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          {dataTemplates.dietName}
                        </Typography>
                      </Item>
                      <ItemDescription>
                        <Box sx={styleLine}>Descrição</Box>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          {dataTemplates.description}
                        </Typography>
                      </ItemDescription>
                      <Item>
                        <Box sx={styleLine}>Dia e Horário</Box>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          {dataTemplates.day} - {dataTemplates.hour}
                        </Typography>
                      </Item>
                      <Item>
                        <Box sx={styleLine}>Nome da Refeição</Box>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          {dataTemplates.mealName}
                        </Typography>
                      </Item>
                      <Item>
                        <Box sx={styleLine}>Ingredientes</Box>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          {dataTemplates.ingredients}
                        </Typography>
                      </Item>
                      <Item>
                        <Box sx={styleLine}>Quantidade</Box>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          {dataTemplates.quantity}
                        </Typography>
                      </Item>
                      <ItemDescription>
                        <Box sx={styleLine}>Modo de Preparo</Box>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          {dataTemplates.prepar}
                        </Typography>
                      </ItemDescription>
                    </Box>
                  </Modal>
                </Link>
              </td>
              <td data-label="Ações">
                <button onClick={() => handleDeleteTemplate(item.id)}>
                  <FiDelete />
                </button>
                <button onClick={() => handleOpenTampletEdit(item)}>
                  {' '}
                  <FiEdit />
                </button>
                <Modal open={openTampletEdit} onClose={handleCloseTampletEdit}>
                  <Box sx={styleForms}>
                    <Typography id="modal--title" variant="h6" component="h2">
                      Editar Template
                    </Typography>
                    <form className="info-form-diet">
                      Nome
                      <input
                        className="input"
                        type="text"
                        placeholder="Nome da dieta"
                        value={dataTampletsEdit.dietName}
                        onChange={(e) =>
                          setDataTampletsEdit({
                            ...dataTampletsEdit,
                            dietName: e.target.value,
                          })
                        }
                      />
                      Descrição
                      <input
                        className="input"
                        type="text"
                        placeholder="Descrição da Dieta: (motivo e calorias)"
                        value={dataTampletsEdit.description}
                        onChange={(e) =>
                          setDataTampletsEdit({
                            ...dataTampletsEdit,
                            description: e.target.value,
                          })
                        }
                      />
                      <div className="description">
                        Dia da Semana
                        <input
                          className="input"
                          type="text"
                          placeholder="Dia da Semana"
                          value={dataTampletsEdit.day}
                          onChange={(e) =>
                            setDataTampletsEdit({
                              ...dataTampletsEdit,
                              day: e.target.value,
                            })
                          }
                        />
                        Horário
                        <input
                          className="input"
                          type="text"
                          placeholder="Horário"
                          value={dataTampletsEdit.hour}
                          onChange={(e) =>
                            setDataTampletsEdit({
                              ...dataTampletsEdit,
                              hour: e.target.value,
                            })
                          }
                        />
                        Nome da Refeição
                        <input
                          className="input"
                          type="text"
                          placeholder="Nome da refeição"
                          value={dataTampletsEdit.mealName}
                          onChange={(e) =>
                            setDataTampletsEdit({
                              ...dataTampletsEdit,
                              mealName: e.target.value,
                            })
                          }
                        />
                        Ingredientes
                        <input
                          className="input"
                          type="text"
                          placeholder="Ingredientes (obs: separados por vírgula)"
                          value={dataTampletsEdit.ingredients}
                          onChange={(e) =>
                            setDataTampletsEdit({
                              ...dataTampletsEdit,
                              ingredients: e.target.value,
                            })
                          }
                        />
                        Quantidade
                        <input
                          className="input"
                          type="text"
                          placeholder="Quantidade (obs: separados por vírgula)"
                          value={dataTampletsEdit.quantity}
                          onChange={(e) =>
                            setDataTampletsEdit({
                              ...dataTampletsEdit,
                              quantity: e.target.value,
                            })
                          }
                        />
                        Modo de Preparo
                        <input
                          className="input"
                          type="text"
                          placeholder="Modo de preparo"
                          value={dataTampletsEdit.prepar}
                          onChange={(e) =>
                            setDataTampletsEdit({
                              ...dataTampletsEdit,
                              prepar: e.target.value,
                            })
                          }
                        />
                      </div>
                    </form>
                    <div className="button-edit">
                      <button
                        onClick={() =>
                          handleUpdateTemplate(dataTampletsEdit.id)
                        }
                        className="btn-diet-template"
                      >
                        Editar Template
                      </button>
                    </div>
                  </Box>
                </Modal>
              </td>
            </tr>
          </tbody>
        );
      });
    }
  }

  function handleTableDiet() {
    if (isLoadingDiets) {
      return (
        <div className="loading-scheduled-pacients">Carregando templates</div>
      );
    } else {
      console.log('Dietas por aqui', diets);
      return diets.map((item, index) => {
        return (
          <tbody>
            <tr key={index}>
              <td data-label="Nome da Dieta">{item.pacient}</td>
              <td data-label="Descrição"> {item.description}</td>
              <td data-label="Ficha do Paciente">
                <Link className="link">
                  <a onClick={() => handleOpenDiet(item)}>Abrir Dieta</a>
                  <Modal open={openDiet} onClose={handleCloseDiet}>
                    <Box sx={styleVisualization}>
                      <Typography
                        id="modal-modal-title"
                        variant="h4"
                        component="h2"
                      >
                        Dieta
                      </Typography>
                      <Typography variant="h4"></Typography>
                      <Typography
                        id="modal-modal-title"
                        variant="h8"
                        component="h2"
                      >
                        Paciente: {dataDiets.pacient}
                      </Typography>
                      <Item>
                        <Box sx={styleLine}>Meta</Box>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          {dataDiets.goal}
                        </Typography>
                      </Item>
                      <ItemDescription>
                        <Box sx={styleLine}>Descrição</Box>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          {dataDiets.description}
                        </Typography>
                      </ItemDescription>
                      <Item>
                        <Box sx={styleLine}>Dia e Horário</Box>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          {dataDiets.day} - {dataDiets.hour}
                        </Typography>
                      </Item>
                      <Item>
                        <Box sx={styleLine}>Nome da Refeição</Box>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          {dataDiets.mealName}
                        </Typography>
                      </Item>
                      <Item>
                        <Box sx={styleLine}>Ingredientes</Box>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          {dataDiets.ingredients}
                        </Typography>
                      </Item>
                      <Item>
                        <Box sx={styleLine}>Quantidade</Box>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          {dataDiets.quantity}
                        </Typography>
                      </Item>
                      <ItemDescription>
                        <Box sx={styleLine}>Modo de Preparo</Box>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          {dataDiets.prepar}
                        </Typography>
                      </ItemDescription>
                    </Box>
                  </Modal>
                </Link>
              </td>
              <td data-label="Ações">
                <button onClick={() => handleDeleteDiet(item.id)}>
                  {' '}
                  <FiDelete />
                </button>
                <button onClick={() => handleOpenDietEdit(item)}>
                  {' '}
                  <FiEdit />
                </button>
                <Modal open={openDietEdit} onClose={handleCloseDietEdit}>
                  <Box sx={styleForms}>
                    <Typography id="modal--title" variant="h6" component="h2">
                      Editar Dieta
                    </Typography>
                    <form className="info-form-diet">
                      <Typography id="modal--title" variant="h6" component="h2">
                        Paciente: {dataDietsEdit.pacient}
                      </Typography>
                      Descrição
                      <input
                        className="input"
                        type="text"
                        placeholder="Descrição da Dieta: (motivo e calorias)"
                        value={dataDietsEdit.description}
                        onChange={(e) =>
                          setDataDietsEdit({
                            ...dataDietsEdit,
                            description: e.target.value,
                          })
                        }
                      />
                      <div className="description">
                        Dia da Semana
                        <input
                          className="input"
                          type="text"
                          placeholder="Dia da Semana"
                          value={dataDietsEdit.day}
                          onChange={(e) =>
                            setDataDietsEdit({
                              ...dataDietsEdit,
                              day: e.target.value,
                            })
                          }
                        />
                        Horário
                        <input
                          className="input"
                          type="text"
                          placeholder="Horário"
                          value={dataDietsEdit.hour}
                          onChange={(e) =>
                            setDataDietsEdit({
                              ...dataDietsEdit,
                              hour: e.target.value,
                            })
                          }
                        />
                        Nome da Refeição
                        <input
                          className="input"
                          type="text"
                          placeholder="Nome da refeição"
                          value={dataDietsEdit.mealName}
                          onChange={(e) =>
                            setDataDietsEdit({
                              ...dataDietsEdit,
                              mealName: e.target.value,
                            })
                          }
                        />
                        Ingredientes
                        <input
                          className="input"
                          type="text"
                          placeholder="Ingredientes (obs: separados por vírgula)"
                          value={dataDietsEdit.ingredients}
                          onChange={(e) =>
                            setDataDietsEdit({
                              ...dataDietsEdit,
                              ingredients: e.target.value,
                            })
                          }
                        />
                        Quantidade
                        <input
                          className="input"
                          type="text"
                          placeholder="Quantidade (obs: separados por vírgula)"
                          value={dataDietsEdit.quantity}
                          onChange={(e) =>
                            setDataDietsEdit({
                              ...dataDietsEdit,
                              quantity: e.target.value,
                            })
                          }
                        />
                        Modo de Preparo
                        <input
                          className="input"
                          type="text"
                          placeholder="Modo de preparo"
                          value={dataDietsEdit.prepar}
                          onChange={(e) =>
                            setDataDietsEdit({
                              ...dataDietsEdit,
                              prepar: e.target.value,
                            })
                          }
                        />
                      </div>
                    </form>
                    <div className="button-edit">
                      <button
                        onClick={() => handleUpdateDiet(dataDietsEdit.id)}
                        className="btn-diet-template"
                      >
                        Editar Template
                      </button>
                    </div>
                  </Box>
                </Modal>
              </td>
            </tr>
          </tbody>
        );
      });
    }
  }

  async function handleRegister(e) {
    e.preventDefault();
    console.log('entrou');
    await firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('templates')
      .add({
        dietName: dietName,
        description: description,
        day: day,
        hour: hour,
        mealName: mealName,
        ingredients: ingredients,
        quantity: quantity,
        prepar: prepar,
      })
      .then(() => {
        console.log('entrou2');
        alert('Template Adicionado com sucesso');
        loadTemplates();
        setOpen(false);
      })
      .catch((error) => {
        console.log(error);
        alert('Ocorreu algum erro. Tente novamente!');
      });
  }
  function handleDeleteTemplate(templateId) {
    firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('templates')
      .doc(templateId)
      .delete()
      .then(() => {
        console.log('Template excluído com sucesso!', templateId);
      })
      .catch((error) => {
        console.error('Erro ao excluir elemento:', error);
      });
    loadTemplates();
  }
  function handleDeleteDiet(dietId) {
    let uidsPacients = [];
    pacients.map((pacient) => uidsPacients.push(pacient.id));
    console.log('uidss', uidsPacients);
    const mainColletionPacientsRef = firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('pacients');

    mainColletionPacientsRef
      .get()
      .then((snapshot) => {
        console.log('snapsshoot', snapshot.docs);
        let lista = [];
        snapshot.forEach((doc) => {
          mainColletionPacientsRef
            .doc(doc.id)
            .collection('diet')
            .doc(dietId)
            .delete()
            .then(() => {
              console.log('Dieta excluída com sucesso!', dietId);
            })
            .catch((error) => {
              console.error('Erro ao excluir elemento:', error);
            });
        });
      })
      .catch((e) => {
        console.log(e);
        alert('Ocorreu algum erro ao pesquisar as dietas');
        setDiets([]);
        setIsLoadingDiets(false);
      });
    loadDiets();
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
            id: doc.id,
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
          setIsLoadingTemplates(false);
          console.log('templates1', templates);
          return;
        }
        setTemplates(lista);
        setIsLoadingTemplates(false);
      })
      .catch((e) => {
        console.log(e);
        alert('Ocorreu algum erro ao pesquisar os pacientes');
        setTemplates([]);
        setIsLoadingTemplates(false);
      });
  }
  function handleUpdateTemplate(templateId, e) {
    firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('templates')
      .doc(templateId)
      .update({
        dietName: dataTampletsEdit.dietName,
        description: dataTampletsEdit.description,
        day: dataTampletsEdit.day,
        hour: dataTampletsEdit.hour,
        mealName: dataTampletsEdit.mealName,
        ingredients: dataTampletsEdit.ingredients,
        quantity: dataTampletsEdit.quantity,
        prepar: dataTampletsEdit.prepar,
      })
      .then(() => {
        console.log('Template atualizado com sucesso!', dietName);
        loadTemplates();
        setOpenTampletEdit(false);
      })
      .catch((error) => {
        console.error('Erro ao excluir elemento:', error);
      });
  }
  function handleUpdateDiet(dietId, e) {
    let uidsPacients = [];
    pacients.map((pacient) => uidsPacients.push(pacient.id));
    console.log('uidss', uidsPacients);
    const mainColletionPacientsRef = firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('pacients');

    mainColletionPacientsRef
      .get()
      .then((snapshot) => {
        console.log('snapsshoot', snapshot.docs);
        let lista = [];
        snapshot.forEach((doc) => {
          mainColletionPacientsRef
            .doc(doc.id)
            .collection('diet')
            .doc(dietId)
            .update({
              description: dataDietsEdit.description,
              day: dataDietsEdit.day,
              hour: dataDietsEdit.hour,
              mealName: dataDietsEdit.mealName,
              ingredients: dataDietsEdit.ingredients,
              quantity: dataDietsEdit.quantity,
              prepar: dataDietsEdit.prepar,
            })
            .then(() => {
              console.log('Template atualizado com sucesso!', dietName);
              loadDiets();
              setOpenDietEdit(false);
            })
            .catch((error) => {
              console.error('Erro ao excluir elemento:', error);
            });
        });
      })
      .catch((e) => {
        console.log(e);
        alert('Ocorreu algum erro ao pesquisar as dietas');
        setDiets([]);
        setIsLoadingDiets(false);
      });
  }

  async function handleAddDiet(e) {
    e.preventDefault();
    console.log('entrou');
    await firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('pacients')
      .doc(pacients[pacientSelected].id)
      .collection('diet')
      .add({
        description: descriptionD,
        day: dayD,
        hour: hourD,
        mealName: mealNameD,
        ingredients: ingredientsD,
        quantity: quantityD,
        prepar: preparD,
      })
      .then(() => {
        console.log('entrou2');
        alert('Dieta Adicionada com sucesso');
        setOpen(false);
      })
      .catch((error) => {
        console.log(error);
        alert('Ocorreu algum erro. Tente novamente!');
      });
  }

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
          setIsLoadingPacients(false);
          return;
        }
        setPacients(lista);
        console.log('pacients', pacients);
        setIsLoadingPacients(false);
      })
      .catch((e) => {
        console.log(e);
        alert('Ocorreu algum erro ao pesquisar os pacientes');
        setPacients([]);
        setIsLoadingPacients(false);
      });
  }

  async function loadDiets() {
    let uidsPacients = [];
    pacients.map((pacient) => uidsPacients.push(pacient.id));
    console.log('uidss', uidsPacients);
    const mainColletionPacientsRef = firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('pacients');

    await mainColletionPacientsRef
      .get()
      .then((snapshot) => {
        console.log('snapsshoot', snapshot.docs);
        let lista = [];
        snapshot.forEach((doc) => {
          const subCollection2Ref = mainColletionPacientsRef
            .doc(doc.id)
            .collection('diet');

          subCollection2Ref.get().then((snapshot2) => {
            snapshot2.forEach((doc2) => {
              console.log('idDiet', doc2.id);
              console.log(doc.data().name);
              lista.push({
                id: doc2.id,
                pacient: doc.data().name,
                goal: doc.data().goal,
                dietName: doc2.data().dietName,
                description: doc2.data().description,
                day: doc2.data().day,
                hour: doc2.data().hour,
                mealName: doc2.data().mealName,
                ingredients: doc2.data().ingredients,
                quantity: doc2.data().quantity,
                prepar: doc2.data().prepar,
              });
              if (lista.length === 0) {
                setDiets([]);
                setIsLoadingDiets(false);
                console.log('dietas', diets);
                return;
              }
              setDiets(lista);
              console.log('lista', lista);
              console.log('dietasss', diets);
              setIsLoadingDiets(false);
            });
          });
        });
      })
      .catch((e) => {
        console.log(e);
        alert('Ocorreu algum erro ao pesquisar as dietas');
        setDiets([]);
        setIsLoadingDiets(false);
      });
  }

  useEffect(() => {
    loadDiets();
  }, [diets]);
  //[diets]

  useEffect(() => {
    loadPacients();
  }, []);

  useEffect(() => {
    loadTemplates();
  }, []);

  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Dietas">
          <FiAlignRight size={25} />
        </Title>

        <div className="schedulle-diet">
          <div className="scheduller-head">
            <span> Templates de Dietas</span>
            <button onClick={() => setOpen(true)}>
              <FiPlus /> Adicionar Template
            </button>
            <Modal open={open} onClose={() => setOpen(false)}>
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Descreva o template
                </Typography>
                <div className="modal-area-diet">
                  <form className="info-form-diet">
                    <input
                      className="input"
                      type="text"
                      placeholder="Nome da dieta"
                      value={dietName}
                      onChange={(e) => setDietName(e.target.value)}
                    />
                    <input
                      className="input"
                      type="text"
                      placeholder="Descrição da Dieta: (motivo e calorias)"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <Divider />
                    <input
                      className="input"
                      type="text"
                      placeholder="Dia da Semana"
                      value={day}
                      onChange={(e) => setDay(e.target.value)}
                    />
                    <div className="description">
                      <input
                        className="input"
                        type="text"
                        placeholder="Horário"
                        value={hour}
                        onChange={(e) => setHour(e.target.value)}
                      />
                      <input
                        className="input"
                        type="text"
                        placeholder="Nome da refeição"
                        value={mealName}
                        onChange={(e) => setMealName(e.target.value)}
                      />
                      <input
                        className="input"
                        type="text"
                        placeholder="Ingredientes (obs: separados por vírgula)"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                      />
                      <input
                        className="input"
                        type="text"
                        placeholder="Quantidade (obs: separados por vírgula)"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                      <input
                        className="input"
                        type="text"
                        placeholder="Modo de preparo"
                        value={prepar}
                        onChange={(e) => setPrepar(e.target.value)}
                      />
                    </div>

                    <div>
                      <button className="btn-diet-template">
                        Adicionar Dia da Semana
                      </button>
                      <button className="btn-diet-template">
                        Adicionar Nova Refeiçao
                      </button>
                      <button
                        onClick={handleRegister}
                        className="btn-diet-template"
                      >
                        Adicionar Template
                      </button>
                    </div>
                  </form>
                </div>
              </Box>
            </Modal>
          </div>

          <Divider color="#58692" />

          <div>
            {templates.length === 0 ? (
              <h1 className="not-fould-templates">
                Não há templates registrados
              </h1>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th scope="col"> Dieta </th>
                    <th scope="col"> Descrição </th>
                    <th scope="col"> Template </th>
                    <th scope="col"> Ações </th>
                  </tr>
                </thead>
                {handleTableTemplates()}
              </table>
            )}
          </div>
        </div>

        <div className="schedulle-diet">
          <div className="scheduller-head">
            <span> Dietas</span>
          </div>

          <Divider color="#58692" />

          <div>
            {diets.length === 0 ? (
              <h1 className="not-fould-templates">Não há dietas cadastradas</h1>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th scope="col"> Paciente </th>
                    <th scope="col"> Decrição da dieta </th>
                    <th scope="col"> Dieta Completa </th>
                  </tr>
                </thead>
                {handleTableDiet()}
              </table>
            )}
          </div>
        </div>

        <div className="container-diet">
          <h1> Cadastrar Nova Dieta</h1>
          <form className="form-profile" onSubmit={handleAddDiet}>
            <div>
              <label>Selecione o Paciente</label>
              {handleSelect()}
            </div>

            <div>
              <label>Selecione o template</label>
              {handleSelectTemplate()}
            </div>

            <div className="form-pair">
              <div className="form-inputs">
                <label>Descrição</label>
                <input
                  type="text"
                  value={descriptionD}
                  onChange={(e) => setDescriptionD(e.target.value)}
                />
              </div>
              <div className="form-inputs">
                <label>Dia da Semana</label>
                <input
                  type="text"
                  value={dayD}
                  onChange={(e) => setDayD(e.target.value)}
                />
              </div>
            </div>

            <div className="form-pair">
              <div className="form-inputs">
                <label>Horário</label>
                <input
                  type="text"
                  value={hourD}
                  onChange={(e) => setHourD(e.target.value)}
                />
              </div>

              <div className="form-inputs">
                <label>Nome da Refeição</label>
                <input
                  type="text"
                  value={mealNameD}
                  onChange={(e) => setMealNameD(e.target.value)}
                />
              </div>
            </div>

            <div className="form-pair">
              <div className="form-inputs">
                <label>Ingredientes</label>
                <input
                  type="text"
                  value={ingredientsD}
                  onChange={(e) => setIngredientsD(e.target.value)}
                />
              </div>
              <div className="form-inputs">
                <label>Quantidade</label>
                <input
                  type="text"
                  value={quantityD}
                  onChange={(e) => setQuantityD(e.target.value)}
                />
              </div>
            </div>
            <div className="form-pair">
              <div className="form-inputs">
                <label>Modo de Preparo</label>
                <input
                  type="text"
                  value={preparD}
                  onChange={(e) => setPreparD(e.target.value)}
                />
              </div>
            </div>
            <div className="btn-area">
              {isLoading ? (
                <CircularProgress color="success" />
              ) : (
                <button type="submit"> Cadastrar Dieta</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
