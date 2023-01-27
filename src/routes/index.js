import { Switch } from 'react-router-dom';
import SignIn from '../pages/SingIn/SingIn';
import SignUp from '../pages/SingUp/SingUp';
import Home from '../pages/Home/Home';
import Route from './Route'
import Inicio from '../pages/inicio';
import NutriHome from '../components/nutrihome/NutriHome';
import RegisterPatient from '../components/patientform/RegisterPatient';
import Patients from '../components/nutrihome/Patients';
import Patient from '../components/nutrihome/Patient';
import Diets from '../components/nutrihome/Diets';
import Diet from '../pages/diet';
import Store from '../components/nutrihome/Store';


export default function Routes(){
    return (
        <Switch>
            <Route exact path='/' component={SignIn}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/home" component={Home}/>
            <Route path = '/' component = {Inicio}/>
            <Route path = '/inicio' component = {Inicio}/>
            <Route path = '/signup' component = {SignUp}/>
            <Route path = '/signin' component = {SignIn}/>
            <Route path = '/nutrihome' component = {NutriHome}/>
            <Route path = '/registerpatient' component = {RegisterPatient}/>
            <Route path = '/patients' component = {Patients}/>
            <Route path = '/patient' component = {Patient}/>
            <Route path = '/diets' component = {Diets}/>
            <Route path = '/diet' component = {Diet}/>
            <Route path = '/store' component = {Store}/>
            <Route path="*" component={<p>Path not resolved</p>} />
        </Switch>
    )
}