import React from 'react';

import {Container, Text, TextGetAll} from './styles';

interface ISection {
  title: string;
}

const TitleSection: React.FC<ISection> = ({title}) => {
  return (
    <Container>
      <Text>{title}</Text>
      <TextGetAll>Ver tudo</TextGetAll>
    </Container>
  );
};

export default TitleSection;
