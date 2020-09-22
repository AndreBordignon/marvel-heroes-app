import React, {useEffect, useState, ReactNode} from 'react';
import {ScrollView} from 'react-native';

import {Container, HeaderBar, FilterButton} from './styles';
import {getAllMarvelData} from './api';

import Welcome from '../../components/Welcome';
import CharList from '../../components/CharList';
import MarveLogo from '../../assets/icons/marvel.svg';
import Filter from '../../assets/icons/menu.svg';
import Search from '../../assets/icons/search.svg';
import TitleSection from '../../components/TitleSection';

interface ICharacters {
  title: string;
  characters: any;
}

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacters[]>([]);

  useEffect(() => {
    searchData();
  }, []);

  const searchData = async () => {
    const {data} = await getAllMarvelData();

    setCharacters(data);

    return data;
  };
  return (
    <Container>
      <HeaderBar>
        <FilterButton>
          <Filter width={24} height={24} />
        </FilterButton>
        <MarveLogo width={100} height={50} />
        <Search width={24} height={24} />
      </HeaderBar>
      <Welcome />
      <TitleSection title="Heróis" />
      {characters
        .filter((char) => char.title === 'Heróis')
        .map(({characters}) => (
          <CharList key={(characters) => characters.id} item={characters} />
        ))}
    </Container>
  );
};

export default Home;
