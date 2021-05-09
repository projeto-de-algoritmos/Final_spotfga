import React, { useContext } from 'react';

import { useParams, useHistory } from 'react-router-dom';

import { Container, Content, Button } from './styles';

import Card from '../../components/Card';
import Header from '../../components/Header';
import { UserCtx } from '../../context/UserCtx';
import { Title, Subtitle } from '../../utils/fonts';

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
        <Card user={user} />
        <Title>Seus amigos:</Title>
        {graph.edges.get(Number(id))?.map((friend) => (
          <Button
            key={friend.id}
            onClick={() => {
              navigation.push(`/user/${friend.id}`);
            }}
          >
            <Subtitle>{friend.nome}</Subtitle>
          </Button>
        ))}
        <Title>Suas musicas:</Title>
        {user?.musics.map((music) => (
          <Button key={music} style={{ cursor: 'default' }}>
            <Subtitle>{music}</Subtitle>
          </Button>
        ))}
      </Content>
    </Container>
  );
};

export default User;
