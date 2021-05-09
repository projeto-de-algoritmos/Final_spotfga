import React, { useContext, useCallback, useEffect, useState } from 'react';

import { IoMdPersonAdd, IoIosPlayCircle } from 'react-icons/io';
import { useParams, useHistory } from 'react-router-dom';

import { Container, Content, Button, Sugestion, ButtonHeader } from './styles';

import Card from '../../components/Card';
import Header from '../../components/Header';
import { UserCtx } from '../../context/UserCtx';
import { Title, Subtitle } from '../../utils/fonts';
import IUser from '../../utils/IUser';
import lcs from '../../utils/lcs';

interface IParams {
  id: string;
}

const User: React.FC = () => {
  const { id } = useParams<IParams>();
  const navigation = useHistory();

  const { graph } = useContext(UserCtx);
  const [userSuggestion, setUserSuggestion] = useState<IUser[]>([]);

  const user = graph.nodes.filter((iuser) => iuser.id === Number(id))[0];

  const handleAddFriend = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();
    },
    [],
  );

  useEffect(() => {
    const friends = graph.edges.get(user.id);
    const friendsId = friends?.map((friend) => friend.id);
    const nonFriends = graph.nodes.filter((nonFriend) => {
      return nonFriend.id !== user.id && !friendsId?.includes(nonFriend.id);
    });
    let result = nonFriends.map((nonFriend) => {
      return {
        ...nonFriend,
        lcs: lcs(
          user.musics,
          nonFriend.musics,
          user.musics.length,
          nonFriend.musics.length,
        ),
      };
    });
    result = result.sort((a, b) => a.lcs - b.lcs).reverse();
    result = result.slice(0, 4);
    setUserSuggestion(result);
  }, []);

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
        <Sugestion>
          <Subtitle style={{ marginBottom: 10 }}>
            Amigos sugeridos:{' '}
            <span style={{ fontSize: 10 }}>
              (com base nas músicas que você ouviu)
            </span>
          </Subtitle>
          {userSuggestion.map((suggestion) => (
            <Button key={suggestion.id}>
              <Subtitle>{suggestion.nome}</Subtitle>
              <ButtonHeader
                style={{ marginRight: 10 }}
                onClick={(e) => {
                  handleAddFriend(e);
                }}
              >
                <IoMdPersonAdd size={30} />
              </ButtonHeader>
            </Button>
          ))}
        </Sugestion>
        <Title>Suas musicas:</Title>
        {user?.musics.map((music) => (
          <Button key={music} style={{ cursor: 'default' }}>
            <Subtitle>{music}</Subtitle>
          </Button>
        ))}
        <Sugestion>
          <Subtitle style={{ marginBottom: 10 }}>
            Músicas sugeridas:{' '}
            <span style={{ fontSize: 10 }}>
              (com base nas suas músicas e de seus amigos)
            </span>
          </Subtitle>
          <Button style={{ cursor: 'default' }}>
            <Subtitle>Burguesinha</Subtitle>
            <ButtonHeader
              style={{ marginRight: 10 }}
              onClick={(e) => {
                handleAddFriend(e);
              }}
            >
              <IoIosPlayCircle size={36} />
            </ButtonHeader>
          </Button>
        </Sugestion>
      </Content>
    </Container>
  );
};

export default User;
