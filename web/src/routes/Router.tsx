import React from 'react';
import { RouteProps as ReactDOMRouteProps, Route as ReactDOMRoute, Redirect } from 'react-router-dom';
import { useAuth } from '../hook/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = (
    { isPrivate = false, component: Component, ...rest }
  ) => {
  
  const { authentication } = useAuth()

  return (
    <ReactDOMRoute
     {...rest}
    render={({ location }) => {

      if (authentication && 
        (location.pathname === '/sign-in' || location.pathname === '/sign-up')
        ) {
        return (
         <Redirect 
            to={{ 
              pathname: '/initial',
              state: { form: location  }
            }}
          />
        )
      }

      if(isPrivate === authentication) {
        return <Component />
      }

      if (!isPrivate && 
          (location.pathname !== '/sign-in' && location.pathname !== '/sign-up') && 
          authentication) {
        return <Component />
      }

      if(isPrivate === !authentication) {
        return (
          <Redirect 
            to={{ 
              pathname: '/sign-in',
              state: { form: location  }
            }}
          />        
        )
      }
      
      return (
        <Component />
      )
    }} 
    />
  );
}

export default Route;