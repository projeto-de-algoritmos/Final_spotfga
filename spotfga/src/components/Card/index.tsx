import React from 'react';

import { IoMdPerson } from 'react-icons/io';

import { Container, CardPicture, CardData } from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      <CardPicture>
        <IoMdPerson size={50} />
      </CardPicture>
      <CardData>
        <h1>Gabriel Paiva</h1>
        <p>Músicas ouvidas: 5</p>
        <p>Amigos: 2</p>
      </CardData>
    </Container>
  );
};

export default Card;
