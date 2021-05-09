import React, { useState, useEffect } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { UserCtx } from './context/UserCtx';
import { mockEdges } from './mock/mockEdges';
import { mockMusics } from './mock/mockMusics';
import { mockNodes } from './mock/mockNodes';
import Home from './pages/Home';
import Musics from './pages/Musics';
import User from './pages/User';
import Users from './pages/Users';
import IGraph from './utils/IGraph';

const Routes: React.FC = () => {
  const [graph, setGraph] = useState<IGraph>({
    nodes: mockNodes,
    edges: mockEdges,
  });

  const [musics, setMusics] = useState<string[]>(mockMusics);

  useEffect(() => {
    setGraph({
      nodes: mockNodes,
      edges: mockEdges,
    });
    setMusics(mockMusics);
  }, [setGraph]);

  return (
    <BrowserRouter>
      <Switch>
        <UserCtx.Provider value={{ graph, setGraph, musics, setMusics }}>
          <Route path="/" exact component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/user/:id" component={User} />
          <Route path="/musics" component={Musics} />
        </UserCtx.Provider>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
