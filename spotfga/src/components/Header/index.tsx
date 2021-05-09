import React from 'react';

import { IoMdArrowBack, IoIosMusicalNotes } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

import { Container, Button } from './styles';

const Header: React.FC = ({ children }) => {
  const navigation = useHistory();

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
        {children}
        <Button>
          <IoIosMusicalNotes size={30} />
        </Button>
      </Container>
    </>
  );
};

export default Header;
