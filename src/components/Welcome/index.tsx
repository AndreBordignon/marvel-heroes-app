import React from 'react';

import {Container, CharFilterText, Text} from './styles';

const Welcome: React.FC = () => {
  return (
    <Container>
      <Text>Bem vindo ao Marvel Heroes</Text>
      <CharFilterText>Escolha o seu personagem</CharFilterText>
    </Container>
  );
};

export default Welcome;
