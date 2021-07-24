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
import ResetPassword from '../pages/ResetPassword';
import Dashboard from '../components/Dashboard';
import { Profile } from '../pages/Profile';
import { Favorites } from '../pages/Favorites';
import { Welcome } from '../pages/Administrator/Welcome';

export const routes = [
  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      { path: 'welcome', element: <Welcome />}
    ]
  },
  {
    path: '/',
    exact: true,
    element: Home
  },
  {
    path: '/adopt/:id',
    component: Adopt,
  },
  {
    patch: '/initial',
    component: Initial
  },
  {
    path: '/congratulations',
    isPrivate: true,
    component: Congratulations 
  },
  {
    path: '/profile',
    isPrivate: true,
    component: Profile,
  },
  {
    path: '/sign-in',
    component: SignIn
  },
  {
    path: '/sign-up',
    component: SignUp
  },
  {
    path: '/forgot-password',
    component: ForgotPassword
  },
  {
    path: '/reset-password',
    component: ResetPassword
  },
  {
    path: '/favorites',
    isPrivate: true,
    component: Favorites
  },
  {
    path: '*',
    component: PageNotFound
  }
]

const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/adopt/:id" component={Adopt} isPrivate={true} />
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
      <Route path="/favorites" component={Favorites} isPrivate={true}/>
      
      <Dashboard>
        {location.pathname === '/dashboard/welcome' && (
          <Route 
            path="/dashboard/welcome" 
            component={Welcome} 
            isPrivate={true} 
          />
        )}
      </Dashboard>

      <Route path="*" component={PageNotFound} />
    </Switch>
  );
}

export default Routes;