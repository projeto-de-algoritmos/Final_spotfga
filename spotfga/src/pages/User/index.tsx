import React from 'react';

import { useParams, useHistory } from 'react-router-dom';

import { Container, Content, Button } from './styles';

import Card from '../../components/Card';
import Header from '../../components/Header';

interface IParams {
  id: string;
}

const User: React.FC = () => {
  const { id } = useParams<IParams>();
  const navigation = useHistory();

  return (
    <Container>
      <Header />
      <Content>
        <Card />
        <h1>Seus amigos:</h1>
        <Button>
          <h1>User 1</h1>
        </Button>
        <Button>
          <h1>User 2</h1>
        </Button>
        <h1>Suas musicas:</h1>
        <Button>
          <h1>Musica 1</h1>
        </Button>
        <Button>
          <h1>Musica 2</h1>
        </Button>
      </Content>
    </Container>
  );
};

export default User;
