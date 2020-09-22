import React from 'react';
import {ScrollView} from 'react-native';
import CharCard from '../CharCard';

import {Container} from './styles';

interface IList {
  item: any;
  characters: any;
}

const CharList: React.FC<IList> = (item) => {
  const characters = item.item;
  return (
    <ScrollView horizontal>
      {characters.map((char) => (
        <Container key={char.id}>
          <CharCard
            name={char.name}
            alterEgo={char.alterEgo}
            imagePath={char.imagePath}
          />
        </Container>
      ))}
    </ScrollView>
  );
};

export default CharList;
