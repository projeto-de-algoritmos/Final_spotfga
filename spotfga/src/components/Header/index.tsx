import React from 'react';

import { IoMdArrowBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

import { Container, ButtonBack } from './styles';

const Header: React.FC = () => {
  const navigation = useHistory();
  return (
    <Container>
      <ButtonBack
        onClick={() => {
          navigation.goBack();
        }}
      >
        <IoMdArrowBack size={30} />
      </ButtonBack>
    </Container>
  );
};

export default Header;
