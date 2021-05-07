import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isList?: boolean;
}

const Card: React.FC<IProps> = ({ isList = false, ...rest }) => {
  return (
    <Container isList {...rest}>
      <h1>Gabriel Paiva</h1>
      <p>Músicas ouvidas: 5</p>
      <p>Amigos: 2</p>
    </Container>
  );
};

export default Card;
