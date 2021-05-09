import React, { useContext, useCallback, useEffect, useState } from 'react';

import { IoMdPersonAdd, IoIosPlayCircle } from 'react-icons/io';
import { useParams, useHistory } from 'react-router-dom';

import { Container, Content, Button, Sugestion, ButtonHeader } from './styles';

import Card from '../../components/Card';
import Header from '../../components/Header';
import { UserCtx } from '../../context/UserCtx';
import bfs from '../../utils/bfs';
import { Title, Subtitle } from '../../utils/fonts';
import IUser from '../../utils/IUser';
import lcs from '../../utils/lcs';

interface IParams {
  id: string;
}

const User: React.FC = () => {
  const { id } = useParams<IParams>();
  const navigation = useHistory();

  const { graph, setGraph } = useContext(UserCtx);
  const [userSuggestion, setUserSuggestion] = useState<IUser[]>([]);
  const [musicsSuggestion, setMusicsSuggestion] = useState<string[]>([]);

  const user = graph.nodes.filter((iuser) => iuser.id === Number(id))[0];

  const handleAddFriend = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, suggestion) => {
      e.stopPropagation();

      const newEdges = new Map([...graph.edges]);
      newEdges.get(user.id)?.push(suggestion);
      newEdges.get(suggestion.id)?.push(user);

      setGraph({ nodes: graph.nodes, edges: newEdges });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user],
  );

  const handleAddMusic = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, music) => {
      e.stopPropagation();

      graph.nodes.filter((node) => node.id === user.id)[0].musics.push(music);

      setGraph({ nodes: graph.nodes, edges: graph.edges });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const suggestFriends = useCallback((): void => {
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
  }, [graph.edges, graph.nodes, user.id, user.musics]);

  const suggestMusic = useCallback(() => {
    const connections = bfs(user, graph);
    let lcsArray = connections.map((connection) => {
      const connectionUser = graph.nodes[connection - 1];
      return {
        ...connectionUser,
        lcs: lcs(
          user.musics,
          connectionUser?.musics,
          user.musics.length,
          connectionUser?.musics.length,
        ),
      };
    });
    lcsArray = lcsArray.sort((a, b) => a.lcs - b.lcs).reverse();
    const result = new Set<string>();
    let i = 0;
    while (result.size < 4) {
      if (i === lcsArray.length) break;
      const musics = lcsArray[i].musics.filter(
        (music) => !user.musics.includes(music),
      );
      musics.forEach((music) => result.add(music));
      i += 1;
    }
    setMusicsSuggestion([...result]);
  }, [graph, user]);

  useEffect(() => {
    suggestFriends();
    suggestMusic();
  }, [suggestFriends, suggestMusic]);

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
          {userSuggestion.length === 0 && (
            <Subtitle>Você não tem sugestões de amizade!</Subtitle>
          )}
          {userSuggestion.map((suggestion) => (
            <Button
              key={suggestion.id}
              onClick={() => {
                navigation.push(`/user/${suggestion.id}`);
              }}
            >
              <Subtitle>{suggestion.nome}</Subtitle>
              <ButtonHeader
                style={{ marginRight: 10 }}
                onClick={(e) => {
                  handleAddFriend(e, suggestion);
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
          {musicsSuggestion.map((music) => (
            <Button key={music} style={{ cursor: 'default' }}>
              <Subtitle>{music}</Subtitle>
              <ButtonHeader
                style={{ marginRight: 10 }}
                onClick={(e) => {
                  handleAddMusic(e, music);
                }}
              >
                <IoIosPlayCircle size={36} />
              </ButtonHeader>
            </Button>
          ))}
        </Sugestion>
      </Content>
    </Container>
  );
};

export default User;
