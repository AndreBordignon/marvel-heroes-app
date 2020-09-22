import React from 'react';
import HomePage from './pages/HomePage';
import CharacterPage from './pages/CharacterPage';

import {createStackNavigator} from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Character: {characterId: string};
};

const AppStack = createStackNavigator<RootStackParamList>();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Home">
    <AppStack.Screen name="Home" component={HomePage} />
    <AppStack.Screen name="Character" component={CharacterPage} />
  </AppStack.Navigator>
);

export default AppRoutes;
