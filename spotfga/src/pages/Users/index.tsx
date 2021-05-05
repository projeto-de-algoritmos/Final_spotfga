import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';

const Users: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Users</h1>
      </Container>
    </>
  );
};

export default Users;
