import { Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import Home from '../pages/Home/Home';
import Route from './Route';
import NutriHome from '../pages/NutriHome/NutriHome';
import RegisterPatient from '../components/patientform/RegisterPatient';
import Patients from '../components/nutrihome/Patients';
import Patient from '../components/nutrihome/Patient';
import Diets from '../components/nutrihome/Diets';
import Diet from '../pages/diet';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/nutrihome" component={NutriHome} isPrivate />
      <Route path="/registerpatient" component={RegisterPatient} />
      <Route path="/patients" component={Patients} />
      <Route path="/patient" component={Patient} />
      <Route path="/diets" component={Diets} />
      <Route path="/diet" component={Diet} />
      <Route path="*" component={<p>Path not resolved</p>} />
    </Switch>
  );
}
