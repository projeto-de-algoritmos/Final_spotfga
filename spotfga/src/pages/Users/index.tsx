import React from 'react';

import { useHistory } from 'react-router-dom';

import { Container, Content, Button } from './styles';

import Header from '../../components/Header';

const Users: React.FC = () => {
  const navigation = useHistory();

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Button
            onClick={() => {
              navigation.push('user/1');
            }}
          >
            <h1>User 1</h1>
          </Button>
          <Button
            onClick={() => {
              navigation.push('user/2');
            }}
          >
            <h1>User 2</h1>
          </Button>
        </Content>
      </Container>
    </>
  );
};

export default Users;
