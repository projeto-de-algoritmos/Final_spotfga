import React, { useContext } from 'react';

import { useParams, useHistory } from 'react-router-dom';

import { Container, Content, Button } from './styles';

import Card from '../../components/Card';
import Header from '../../components/Header';
import { UserCtx } from '../../context/UserCtx';

interface IParams {
  id: string;
}

const User: React.FC = () => {
  const { id } = useParams<IParams>();
  const navigation = useHistory();

  const { graph } = useContext(UserCtx);

  const user = graph.nodes.filter((iuser) => iuser.id === Number(id))[0];

  return (
    <Container>
      <Header />
      <Content>
        <Card />
        <h1>Seus amigos:</h1>
        {graph.edges.get(Number(id))?.map((friend) => (
          <Button>
            <h1>{friend.nome}</h1>
          </Button>
        ))}
        <h1>Suas musicas:</h1>
        {user?.musics.map((music) => (
          <Button>
            <h1>{music}</h1>
          </Button>
        ))}
      </Content>
    </Container>
  );
};

export default User;
