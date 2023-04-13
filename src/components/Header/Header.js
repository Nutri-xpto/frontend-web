/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import './header.css';
import avatar from '../../assets/user_icon.png';
import { Link } from 'react-router-dom';
import {
  FiHome,
  FiUser,
  FiUsers,
  FiAlignRight,
  FiSetting,
  FiShoppingCart,
  FiLogOut,
} from 'react-icons/fi';

export default function Header() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <div>
        <img src={user.avatarUrl == null ? avatar : user.avatarUrl}></img>
      </div>

      <Link to="/nutrihome">
        <FiHome color="#58692e" />
        Inicio{' '}
      </Link>

      <Link to="/diets">
        {' '}
        <FiAlignRight color="#58692e" /> Dietas{' '}
      </Link>
      <Link to="/patients">
        {' '}
        <FiUsers color="#58692e" /> Pacientes{' '}
      </Link>
      <Link to="/profile">
        {' '}
        <FiUser color="#58692e" /> Perfil{' '}
      </Link>
    </div>
  );
}
