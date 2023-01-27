import './App.css';
import { BrowserRouter } from "react-router-dom";
import RoutesApp from './routes';


import Inicio from './pages/inicio';
import SignIn from './pages/SingIn/SingIn';
import SignUp from './pages/SingUp/SingUp';
import Diet from './pages/diet';

import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

import NutriNavbar from './components/navbar/NutriNavbar';
import NutriHome from './components/nutrihome/NutriHome';
import Store from './components/nutrihome/Store';

import Patients from './components/nutrihome/Patients';
import Patient from './components/nutrihome/Patient';


import RegisterPatient from './components/patientform/RegisterPatient';
import Diets from './components/nutrihome/Diets';

import app from '../src/services/firabaseConnection';


function App() {
  console.log(app)
  return (  
    // <>
    // <div>
    // <NutriNavbar />
    // <Navbar />
    <BrowserRouter>
      <RoutesApp/>
    </BrowserRouter>
    // <Footer /> 
    // </div>
    // </>
  );
}

export default App;
