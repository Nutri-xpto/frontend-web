import firebase from './firabaseConnection';

const registerPacient = async (
  uidNutri,
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
          diseaseHistory: diseaseHistory,
          phone: phone,
          cpf: cpf,
          gender: gender,
          goal: goal,
          height: height,
          weight: weight,
          imc: imc,
          bioimpedance: bioimpedance,
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

const pacientService = {
  registerPacient,
};

export default pacientService;
