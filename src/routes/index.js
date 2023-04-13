import { Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import Home from '../pages/Home/Home';
import Route from './Route';
import NutriHome from '../pages/NutriHome/NutriHome';
import RegisterPatient from '../components/patientform/RegisterPatient';
import Patient from '../components/nutrihome/Patient';
import Diets from '../pages/Diets/Diets';
import Diet from '../pages/diet';
import Profile from '../pages/Profile/Profile';
import Pacients from '../pages/Pacients/Pacients';
import PersonFormu from '../pages/Pacients/PersonFormu';
import DietFormu from '../pages/Pacients/DietFormu';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/nutrihome" component={NutriHome} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/registerpatient" component={RegisterPatient} />
      <Route path="/patients" component={Pacients} isPrivate />
      <Route path="/personformu" component={PersonFormu} isPrivate />
      <Route path="/dietformu" component={DietFormu} isPrivate />
      <Route path="/patient" component={Patient} isPrivate />
      <Route path="/diets" component={Diets} isPrivate />
      <Route path="/diet" component={Diet} isPrivate />
      <Route path="*" component={<p>Path not resolved</p>} />
    </Switch>
  );
}
