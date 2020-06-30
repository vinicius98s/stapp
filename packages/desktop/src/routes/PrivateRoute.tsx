import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

interface Props {
  isAuthenticated: boolean;
}

const PrivateRoute: React.FC<RouteProps & Props> = ({
  children,
  isAuthenticated,
  ...props
}) => {
  return (
    <Route
      {...props}
      render={() => (isAuthenticated ? children : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
