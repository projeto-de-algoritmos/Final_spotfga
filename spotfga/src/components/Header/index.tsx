import React from 'react';

import {
  IoMdArrowBack,
  IoMdPersonAdd,
  IoIosMusicalNotes,
} from 'react-icons/io';
import { useHistory } from 'react-router-dom';

import { Container, Button } from './styles';

const Header: React.FC = () => {
  const navigation = useHistory();
  return (
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
  );
};

export default Header;
