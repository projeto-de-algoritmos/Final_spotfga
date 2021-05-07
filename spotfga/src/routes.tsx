import React, { useState } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { UserCtx } from './context/UserCtx';
import Home from './pages/Home';
import User from './pages/User';
import Users from './pages/Users';
import IGraph from './utils/IGraph';
import IUser from './utils/IUser';

const Routes: React.FC = () => {
  const emptyGraph: IGraph = {
    edges: new Map(),
    nodes: [{}] as IUser[],
  };

  const [graph, setGraph] = useState<IGraph>(emptyGraph);

  return (
    <BrowserRouter>
      <Switch>
        <UserCtx.Provider value={{ graph, setGraph }}>
          <Route path="/" exact component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/user/:id" component={User} />
        </UserCtx.Provider>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
