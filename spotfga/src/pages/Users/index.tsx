import React from 'react';

import { Container, Content, Button } from './styles';

import Header from '../../components/Header';

const Users: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Button>
            <h1>User 1</h1>
          </Button>
          <Button>
            <h1>User 2</h1>
          </Button>
        </Content>
      </Container>
    </>
  );
};

export default Users;
