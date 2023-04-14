/* eslint-disable no-unused-vars */
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import './profile.css';
import { FiLogOut, FiUpload, FiUser } from 'react-icons/fi';
import { AuthContext } from '../../contexts/auth';
import { useContext, useState } from 'react';
import avatar from '../../assets/user_icon.png';
import firebase from '../../services/firabaseConnection';
export default function Profile() {
  const { user, signOut, setUser, storageUser } = useContext(AuthContext);

  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [cod, setCod] = useState(user && user.cod);
  const [graduation, setGraduation] = useState(user && user.graduation);
  const [address, setAddress] = useState(user && user.address);
  const [additionalInfo, setAdditionalInfo] = useState(
    user && user.additionalInfo
  );
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
  const [imageAvatar, setImageAvatar] = useState(null);

  async function handleSave(e) {
    e.preventDefault();

    if (imageAvatar === null) {
      await firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .update({
          name: name,
          address: address,
          additionalInfo: additionalInfo,
          avatarUrl: avatarUrl,
        })
        .then(() => {
          let data = {
            ...user,
            name: name,
            address: address,
            additionalInfo: additionalInfo,
            avatarUrl: avatarUrl,
          };

          setUser(data);
          storageUser(data);
        });
    } else {
      handleUpload();
    }
  }

  async function handleUpload() {
    const currentUid = user.uid;

    const uploadTask = await firebase
      .storage()
      .ref(`images/${currentUid}/${imageAvatar.name}`)
      .put(imageAvatar)
      .then(async () => {
        console.log('FOTO ENVIADA COM SUCESSO!');

        await firebase
          .storage()
          .ref(`images/${currentUid}`)
          .child(imageAvatar.name)
          .getDownloadURL()
          .then(async (url) => {
            let urlFoto = url;

            await firebase
              .firestore()
              .collection('users')
              .doc(user.uid)
              .update({
                avatarUrl: urlFoto,
                name: name,
                address: address,
                additionalInfo: additionalInfo,
              })
              .then(() => {
                let data = {
                  ...user,
                  avatarUrl: urlFoto,
                  name: name,
                  address: address,
                  additionalInfo: additionalInfo,
                };
                setUser(data);
                storageUser(data);
              });
          });
      });
  }

  function handleFile(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (
        image.type === 'image/jpeg' ||
        image.type === 'image/png' ||
        image.type === 'image/jpg'
      ) {
        setImageAvatar(image);
        setAvatarUrl(URL.createObjectURL(e.target.files[0]));
      } else {
        alert('Envie uma imagem dos tipos: jpeg, png ou jpg');
        setImageAvatar(null);
        return null;
      }
    }
  }

  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Meu Perfil">
          <FiUser size={25} />
        </Title>

        <div className="container">
          <form className="form-profile" onSubmit={handleSave}>
            <label className="Label-avatar">
              <span>
                <FiUpload color="#58692e" size={25} />
              </span>
              <input type="file" accept="image/*" onChange={handleFile} />{' '}
              <br />
              {avatarUrl === null ? (
                <img
                  src={avatar}
                  width="250"
                  height="250"
                  alt="Foto de perfil"
                />
              ) : (
                <img
                  src={avatarUrl}
                  width="200"
                  height="200"
                  alt="Foto de perfil"
                />
              )}
            </label>

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
                <label>Email</label>
                <input type="text" value={email} disabled={true} />
              </div>
            </div>

            <div className="form-pair">
              <div className="form-inputs">
                <label>Codigo do Nutricionista</label>
                <input type="text" value={cod} disabled={true} />
              </div>

              <div className="form-inputs">
                <label>Formação</label>
                <input type="text" value={graduation} disabled={true} />
              </div>
            </div>

            <div className="form-pair">
              <div className="form-inputs">
                <label>Endereço de Atendimento</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="form-inputs">
                <label>Informações Adicionais</label>
                <input
                  type="text"
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                />
              </div>
            </div>
            <div className="btn-area">
              <button type="submit"> Salvar Alterações</button>
              <button onClick={() => signOut()}>
                <FiLogOut color="#58692e" />
                Fazer Logout
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
