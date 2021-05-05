import React from 'react';

import { IoMdPerson, IoIosMusicalNotes } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

import { Container, Content, Card } from './styles';

const Home: React.FC = () => {
  const navigation = useHistory();
  return (
    <>
      <Container>
        <Content>
          <Card
            onClick={() => {
              navigation.push('users');
            }}
          >
            <IoMdPerson size={80} />
          </Card>
          <Card>
            <IoIosMusicalNotes size={80} />
          </Card>
        </Content>
      </Container>
    </>
  );
};

export default Home;
