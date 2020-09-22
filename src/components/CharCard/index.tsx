import React from 'react';

import {Container, BoxInfo, Text, Image} from './styles';

interface ICharacter {
  id: string;
  name: string;
  alterEgo: string;
  imagePath: string;
}
const CharCard: React.FC<ICharacter> = ({id, name, alterEgo, imagePath}) => {
  return (
    <Container key={id}>
      <Image source={{uri: `http://192.168.1.67:8081/src/${imagePath}`}} />
      <BoxInfo>
        <Text>{name}</Text>
        <Text>{alterEgo}</Text>
      </BoxInfo>
    </Container>
  );
};

export default CharCard;
