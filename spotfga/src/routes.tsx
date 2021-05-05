import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Users from './pages/Users';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/users" component={Users} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
