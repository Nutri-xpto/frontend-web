import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';
import AuthProvider from './contexts/auth';
import firebase from '../src/services/firabaseConnection';

function App() {
  console.log(firebase);
  return (
    <AuthProvider>
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
