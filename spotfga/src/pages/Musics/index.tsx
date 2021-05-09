import React, { useContext, useState, useCallback, useRef } from 'react';

import { FormHandles } from '@unform/core';
import { IoIosMusicalNotes } from 'react-icons/io';

import { Container, Content, Button, StyledForm, ButtonHeader } from './styles';

import ButtonBorder from '../../components/ButtonBorder';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import { UserCtx } from '../../context/UserCtx';
import { Title, Subtitle } from '../../utils/fonts';

const Musics: React.FC = () => {
  const musicFormRef = useRef<FormHandles>(null);
  const [modalMusic, setModalMusic] = useState(false);

  const { musics, setMusics } = useContext(UserCtx);

  const handleMusicSubmit = useCallback(
    (data) => {
      if (!musics.includes(data.music)) {
        const newMusics = [...musics, data.music];
        setMusics(newMusics);
      }

      setModalMusic(false);
      musicFormRef.current?.reset();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setMusics],
  );

  return (
    <>
      <Header>
        <ButtonHeader
          style={{ marginRight: 10 }}
          onClick={() => {
            setModalMusic(true);
          }}
        >
          <IoIosMusicalNotes size={30} />
        </ButtonHeader>
      </Header>
      <Container>
        <Content>
          <Title>Músicas:</Title>
          {musics.map((music) => (
            <Button key={music} style={{ cursor: 'default' }}>
              <Subtitle>{music}</Subtitle>
            </Button>
          ))}
        </Content>
      </Container>

      <Modal modalVisible={modalMusic} setModalVisible={setModalMusic}>
        <Title style={{ color: '#6f4691', marginBottom: 30 }}>
          Cadastrar música
        </Title>
        <StyledForm ref={musicFormRef} onSubmit={handleMusicSubmit}>
          <Input name="music" placeholder="Nome da música" />
          <ButtonBorder
            type="button"
            onClick={() => {
              musicFormRef.current?.submitForm();
            }}
          >
            Cadastrar
          </ButtonBorder>
        </StyledForm>
      </Modal>
    </>
  );
};

export default Musics;
