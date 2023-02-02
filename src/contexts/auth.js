import { useState, createContext, useEffect } from 'react';
import firebase from '../services/firabaseConnection';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  function storageUser(data) {
    localStorage.setItem('SistemaUser', JSON.stringify(data));
  }

  useEffect(() => {
    function loadStorage() {
      const storageUser = localStorage.getItem('SistemaUser');
      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
      setLoading(false);
    }

    loadStorage();
  }, []);

  async function signUp(
    name,
    email,
    password,
    cod,
    graduation,
    address,
    additionalInfo
  ) {
    setLoadingAuth(true);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;

        await firebase
          .firestore()
          .collection('users')
          .doc(uid)
          .set({
            name: name,
            cod: cod,
            graduation: graduation,
            address: address,
            additionalInfo: additionalInfo,
            avatarUrl: null,
          })
          .then(() => {
            let data = {
              uid: uid,
              name: name,
              email: value.user.email,
              cod: cod,
              graduation: graduation,
              address: address,
              additionalInfo: additionalInfo,
              avatarUrl: null,
            };

            setUser(data);
            storageUser(data);
            setLoadingAuth(false);
          });
      })
      .catch((error) => {
        console.log('esse eh o erro', error);
        setLoadingAuth(false);
      });
  }

  async function signOut() {
    await firebase.auth().signOut();
    localStorage.removeItem('SistemaUser');
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
