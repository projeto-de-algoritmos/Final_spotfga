import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import User from './pages/User';
import Users from './pages/Users';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/user/:id" component={User} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
