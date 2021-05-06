import React from 'react';

import { useParams, useHistory } from 'react-router-dom';

import { Container } from './styles';

interface IParams {
  id: string;
}

const User: React.FC = () => {
  const { id } = useParams<IParams>();
  const navigation = useHistory();

  return (
    <Container>
      <h1>{id}</h1>
    </Container>
  );
};

export default User;
