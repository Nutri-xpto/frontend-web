import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';

import app from '../src/services/firabaseConnection';

function App() {
  console.log(app);
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
