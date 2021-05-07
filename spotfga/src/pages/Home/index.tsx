import React, { useContext, useEffect } from 'react';

import { IoMdPerson, IoIosMusicalNotes } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

import { Container, Content, Card } from './styles';

import { UserCtx } from '../../context/UserCtx';
import { mockEdges } from '../../mock/mockEdges';
import { mockNodes } from '../../mock/mockNodes';

const Home: React.FC = () => {
  const navigation = useHistory();

  const { graph, setGraph } = useContext(UserCtx);

  useEffect(() => {
    setGraph({
      nodes: mockNodes,
      edges: mockEdges,
    });
  }, [setGraph]);

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
