import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import * as Pages from './pages';

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Pages.Login />
      </Route>
      <Route path="/register">
        <Pages.Register />
      </Route>
    </Switch>
  </Router>
);
