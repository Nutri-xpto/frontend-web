import firebase from './firabaseConnection';

const registerPacient = async (
  uidNutri,
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
) => {
  await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async (value) => {
      let uid = value.user.uid;

      await firebase
        .firestore()
        .collection('users')
        .doc(uidNutri)
        .collection('pacients')
        .doc(uid)
        .set({
          name: name,
          age: age,
          phone: phone,
          cpf: cpf,
          gender: gender,
          goal: goal,
          height: height,
          weight: weight,
          imc: imc,
          bioimpedance: bioimpedance,
          diseaseHistory: diseaseHistory,
          additionalInf: additionalInf,
          email: email,
          password: password,
          imagePerfil: null,
        })
        .then(() => {
          alert('Paciente cadastrado:', name);
        });
    })
    .catch((error) => {
      console.log(error);
      alert('Ocorreu algum erro. Tente novamente!');
    });
};

const getAllPacients = async (uidNutri) => {
  await firebase
    .firestore()
    .collection('users')
    .doc(uidNutri)
    .collection('pacients')
    .get()
    .then((snapshot) => {
      let lista = [];
      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          name: doc.data().name,
          diseaseHistory: doc.data().diseaseHistory,
          phone: doc.data().phone,
          cpf: doc.data().cpf,
          gender: doc.data().gender,
          goal: doc.data().goal,
          height: doc.data().height,
          weight: doc.data().weight,
          imc: doc.data().imc,
          bioimpedance: doc.data().bioimpedance,
          email: doc.data().email,
          password: doc.data().password,
          imagePerfil: doc.data().imagePerfil,
        });
      });

      if (lista.length === 0) {
        console.log('LISTAAAAAA', lista);
        console.log('Nenhum paciente registrado');
        return [{ id: '1', name: 'teste' }];
      }
      console.log('LISTAAAAAA', lista);
      return lista;
    })
    .catch((e) => {
      console.log(e);
      alert('Ocorreu algum erro ao pesquisar os pacientes');
      return [{ id: '1', name: 'teste' }];
    });
};

const pacientService = {
  registerPacient,
  getAllPacients,
};

export default pacientService;
