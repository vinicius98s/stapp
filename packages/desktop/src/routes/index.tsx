import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import loadable from '@loadable/component';

import PageLoader from '@components/PageLoader';
import PrivateRoute from './PrivateRoute';

const Home = loadable(() => import('../pages/Home'), {
  fallback: <PageLoader />,
});

const Login = loadable(() => import('../pages/Login'), {
  fallback: <PageLoader />,
});

const Register = loadable(() => import('../pages/Register'), {
  fallback: <PageLoader />,
});

interface Props {
  isAuthenticated: boolean;
}

const Routes = ({ isAuthenticated }: Props) => {
  if (!isAuthenticated) Register.preload();

  return (
    <Router>
      <Switch>
        <PrivateRoute isAuthenticated={isAuthenticated} path="/" exact>
          <Home />
        </PrivateRoute>
        <Route
          path="/login"
          render={() => (isAuthenticated ? <Redirect to="/" /> : <Login />)}
        />
        <Route
          path="/register"
          render={() => (isAuthenticated ? <Redirect to="/" /> : <Register />)}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
