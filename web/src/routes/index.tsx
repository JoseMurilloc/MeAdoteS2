import { Switch, useLocation } from 'react-router-dom';
import Route from './Router';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import Adopt from '../pages/Adopt';
import Initial from '../pages/Initial';
import Congratulations from '../pages/Congratulations';
import PageNotFound from '../pages/PageNotFound';
import { Profile } from '../pages/Profile';
import ResetPassword from '../pages/ResetPassword';


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/adopt/:id" component={Adopt} />
      <Route exact path="/initial" component={Initial} />
      <Route 
        path="/congratulations"
        component={Congratulations}
        isPrivate={true} 
      />

      <Route path="/profile" component={Profile} isPrivate={true} />

      <Route path="/sign-in"component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password" component={ResetPassword} />
        
      <Route path="*" component={PageNotFound} />

    </Switch>
  );
}

export default Routes;