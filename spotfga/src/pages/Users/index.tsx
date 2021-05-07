import React, { useContext } from 'react';

import { useHistory } from 'react-router-dom';

import { Container, Content, Button } from './styles';

import Header from '../../components/Header';
import { UserCtx } from '../../context/UserCtx';

const Users: React.FC = () => {
  const navigation = useHistory();

  const { graph } = useContext(UserCtx);

  return (
    <>
      <Header />
      <Container>
        <Content>
          {graph.nodes.map((user) => (
            <Button
              onClick={() => {
                navigation.push(`user/${user.id}`);
              }}
            >
              <h1>{user.nome}</h1>
            </Button>
          ))}
        </Content>
      </Container>
    </>
  );
};

export default Users;
