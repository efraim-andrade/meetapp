import React from 'react';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Background, Header } from '~/components';

import { Container } from './styles';

function Profile() {
  return (
    <Background>
      <Container>
        <Header />
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" color={tintColor} size={20} />
  ),
};

export default withNavigationFocus(Profile);
