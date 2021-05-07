import React, { useRef, useCallback, useState } from 'react';

import { FormHandles } from '@unform/core';
import {
  IoMdArrowBack,
  IoMdPersonAdd,
  IoIosMusicalNotes,
} from 'react-icons/io';
import { useHistory } from 'react-router-dom';

import { Container, Button } from './styles';

import Modal from '../Modal';

const Header: React.FC = () => {
  const navigation = useHistory();
  const userFormRef = useRef<FormHandles>(null);

  const [modalUser, setModalUser] = useState(false);

  const HandleUserSubmit = useCallback(() => {
    console.log('Submit');
  }, []);

  return (
    <>
      <Container>
        <Button
          onClick={() => {
            navigation.goBack();
          }}
          style={{ marginRight: 'auto' }}
        >
          <IoMdArrowBack size={30} />
        </Button>
        <Button style={{ marginRight: 10 }}>
          <IoMdPersonAdd size={30} />
        </Button>
        <Button>
          <IoIosMusicalNotes size={30} />
        </Button>
      </Container>
      <Modal modalVisible={modalUser} setModalVisible={setModalUser}>
        <h1>Cadastrar usuário</h1>
      </Modal>
    </>
  );
};

export default Header;
