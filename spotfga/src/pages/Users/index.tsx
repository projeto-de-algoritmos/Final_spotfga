import React, { useContext, useState, useCallback, useRef } from 'react';

import { FormHandles } from '@unform/core';
import { IoMdPersonAdd } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

import { Container, Content, Button, StyledForm, ButtonHeader } from './styles';

import ButtonBorder from '../../components/ButtonBorder';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import { UserCtx } from '../../context/UserCtx';
import { Title, Subtitle } from '../../utils/fonts';

const Users: React.FC = () => {
  const navigation = useHistory();
  const userFormRef = useRef<FormHandles>(null);
  const [modalUser, setModalUser] = useState(false);

  const { graph, setGraph } = useContext(UserCtx);

  const HandleUserSubmit = useCallback((data) => {
    const newUser = {
      id: graph.nodes.length + 1,
      nome: data.username,
      musics: [],
    };
    graph.nodes.push(newUser);
    graph.edges.set(newUser.id, []);

    setGraph(graph);
    setModalUser(false);
    userFormRef.current?.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header>
        <ButtonHeader
          style={{ marginRight: 10 }}
          onClick={() => {
            setModalUser(true);
          }}
        >
          <IoMdPersonAdd size={30} />
        </ButtonHeader>
      </Header>
      <Container>
        <Content>
          <Title>Usuários:</Title>
          {graph.nodes.map((user) => (
            <Button
              key={user.id}
              onClick={() => {
                navigation.push(`user/${user.id}`);
              }}
            >
              <Subtitle>{user.nome}</Subtitle>
            </Button>
          ))}
        </Content>
      </Container>
      <Modal modalVisible={modalUser} setModalVisible={setModalUser}>
        <Title style={{ color: '#6f4691', marginBottom: 30 }}>
          Cadastrar usuário
        </Title>
        <StyledForm ref={userFormRef} onSubmit={HandleUserSubmit}>
          <Input name="username" placeholder="Nome do usuário" />
          <ButtonBorder
            type="button"
            onClick={() => {
              userFormRef.current?.submitForm();
            }}
          >
            Cadastrar
          </ButtonBorder>
        </StyledForm>
      </Modal>
    </>
  );
};

export default Users;
