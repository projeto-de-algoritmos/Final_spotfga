import React, { useContext } from 'react';

import { IoMdPerson } from 'react-icons/io';

import { Container, CardPicture, CardData } from './styles';

import { UserCtx } from '../../context/UserCtx';
import { Title, Subtitle } from '../../utils/fonts';
import IUser from '../../utils/IUser';

interface IProps {
  user: IUser;
}

const Card: React.FC<IProps> = ({ user }) => {
  const { graph } = useContext(UserCtx);

  return (
    <Container>
      <CardPicture>
        <IoMdPerson size={50} />
      </CardPicture>
      <CardData>
        <Title>{user?.nome}</Title>
        <Subtitle>{`Músicas ouvidas: ${user?.musics.length}`}</Subtitle>
        <Subtitle>{`Amigos: ${graph.edges.get(user?.id)?.length}`}</Subtitle>
      </CardData>
    </Container>
  );
};

export default Card;
