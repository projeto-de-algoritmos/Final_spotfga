import React, { useContext } from 'react';

import { useHistory } from 'react-router-dom';

import { Container, Content, Button } from './styles';

import Header from '../../components/Header';
import { UserCtx } from '../../context/UserCtx';

const Users: React.FC = () => {
  const navigation = useHistory();

  const { graph, setGraph } = useContext(UserCtx);

  console.log(graph);

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
