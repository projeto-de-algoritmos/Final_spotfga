/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  useContext,
  useCallback,
  useEffect,
  useState,
  useRef,
} from 'react';

import { FormHandles } from '@unform/core';
import { IoMdPersonAdd, IoIosPlayCircle } from 'react-icons/io';
import { useParams, useHistory } from 'react-router-dom';

import {
  Container,
  Content,
  Button,
  Sugestion,
  ButtonHeader,
  StyledForm,
  Line,
} from './styles';

import ButtonBorder from '../../components/ButtonBorder';
import Card from '../../components/Card';
import Header from '../../components/Header';
import InputRadio from '../../components/InputRadio';
import Modal from '../../components/Modal';
import { UserCtx } from '../../context/UserCtx';
import bfs from '../../utils/bfs';
import { Title, Subtitle } from '../../utils/fonts';
import IUser from '../../utils/IUser';
import lcs from '../../utils/lcs';

interface IParams {
  id: string;
}

interface OptionsProps {
  id: number | string | any;
  label: string;
}

const User: React.FC = () => {
  const { id } = useParams<IParams>();
  const navigation = useHistory();
  const usersFormRef = useRef<FormHandles>(null);
  const musicsFormRef = useRef<FormHandles>(null);

  const { graph, setGraph, musics } = useContext(UserCtx);
  const [userSuggestion, setUserSuggestion] = useState<IUser[]>([]);
  const [musicsSuggestion, setMusicsSuggestion] = useState<string[]>([]);
  const [modalUsers, setModalUsers] = useState(false);
  const [modalMusics, setModalMusics] = useState(false);
  const [friendsOptions, setFriendsOptions] = useState<OptionsProps[]>([]);
  const [musicsOptions, setMusicsOptions] = useState<OptionsProps[]>([]);

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

  const handleUserForm = useCallback((data) => {
    const newEdges = new Map([...graph.edges]);
    newEdges.get(user.id)?.push(graph.nodes[data.userCheck - 1]);
    newEdges.get(graph.nodes[data.userCheck - 1].id)?.push(user);

    setGraph({ nodes: graph.nodes, edges: newEdges });
    setModalUsers(false);
    usersFormRef.current?.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMusicForm = useCallback((data) => {
    graph.nodes
      .filter((node) => node.id === user.id)[0]
      .musics.push(data.userCheck);

    setGraph({ nodes: graph.nodes, edges: graph.edges });
    setModalMusics(false);
    musicsFormRef.current?.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const chooseFriendsOptions = useCallback(() => {
    const friends = graph.edges.get(user.id);
    const friendsId = friends?.map((friend) => friend.id);
    const allUsers = graph.nodes
      .filter((nonFriend) => {
        return nonFriend.id !== user.id && !friendsId?.includes(nonFriend.id);
      })
      .map((userNode) => {
        return { id: userNode.id, label: userNode.nome };
      });
    setFriendsOptions(allUsers);
  }, [graph.edges, graph.nodes, user.id]);

  const chooseMusicsOptions = useCallback(() => {
    const options = musics
      .filter((music) => !user.musics.includes(music))
      .map((music) => {
        return { id: music, label: music };
      });
    setMusicsOptions(options);
  }, [musics, user.musics]);

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
      const filteredMusics = lcsArray[i].musics.filter(
        (music) => !user.musics.includes(music),
      );
      filteredMusics.forEach((music) => result.add(music));
      i += 1;
    }
    setMusicsSuggestion([...result]);
  }, [graph, user]);

  useEffect(() => {
    chooseFriendsOptions();
    chooseMusicsOptions();
    suggestFriends();
    suggestMusic();
  }, [suggestFriends, suggestMusic, chooseFriendsOptions, chooseMusicsOptions]);

  return (
    <>
      <Container>
        <Header />
        <Content>
          <Card user={user} />
          <Line>
            <Title>Seus amigos:</Title>
            <ButtonHeader
              style={{ marginRight: 10 }}
              onClick={() => {
                setModalUsers(true);
              }}
            >
              <IoMdPersonAdd size={30} />
            </ButtonHeader>
          </Line>
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
          <Line>
            <Title>Suas musicas:</Title>
            <ButtonHeader
              style={{ marginRight: 10 }}
              onClick={() => {
                setModalMusics(true);
              }}
            >
              <IoIosPlayCircle size={36} />
            </ButtonHeader>
          </Line>
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
            {musicsSuggestion.length === 0 && (
              <Subtitle>Você não tem sugestões de música!</Subtitle>
            )}
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

      <Modal
        modalVisible={modalUsers}
        setModalVisible={setModalUsers}
        scrollView
      >
        <Title style={{ color: '#6f4691', marginBottom: 30 }}>
          Adicionar amigo
        </Title>
        <StyledForm ref={usersFormRef} onSubmit={handleUserForm}>
          <InputRadio name="userCheck" options={friendsOptions} />
          <ButtonBorder
            type="button"
            onClick={() => {
              usersFormRef.current?.submitForm();
            }}
          >
            Adicionar
          </ButtonBorder>
        </StyledForm>
      </Modal>

      <Modal
        modalVisible={modalMusics}
        setModalVisible={setModalMusics}
        scrollView
      >
        <Title style={{ color: '#6f4691', marginBottom: 30 }}>
          Adicionar música
        </Title>
        <StyledForm ref={musicsFormRef} onSubmit={handleMusicForm}>
          <InputRadio name="userCheck" options={musicsOptions} />
          <ButtonBorder
            type="button"
            onClick={() => {
              musicsFormRef.current?.submitForm();
            }}
          >
            Adicionar
          </ButtonBorder>
        </StyledForm>
      </Modal>
    </>
  );
};

export default User;
