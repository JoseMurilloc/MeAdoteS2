import { Switch } from 'react-router-dom';
import Route from './Router';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import Adopt from '../pages/Adopt';
import Initial from '../pages/Initial';
import Congratulations from '../pages/Congratulations';


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/adopt/:id" component={Adopt} />
      <Route path="/initial" component={Initial} />
      <Route 
        path="/congratulations"
        component={Congratulations}
        isPrivate={true} 
      />
    </Switch>
  );
}

export default Routes;