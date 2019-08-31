import React from 'react';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Header, Background, Card } from '~/components';

import {
  Container,
  DateActions,
  IconButton,
  Left,
  Right,
  Date,
} from './styles';

function Dashboard() {
  function handleNextDate() {}

  function handlePrevDate() {}

  return (
    <Background>
      <Header />

      <Container>
        <DateActions>
          <IconButton onPress={handleNextDate}>
            <Left />
          </IconButton>

          <Date>20 de Agosto</Date>

          <IconButton onPress={handlePrevDate}>
            <Right />
          </IconButton>
        </DateActions>

        <Card banner="https://i.redd.it/j7xrs4r2565z.jpg" />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" color={tintColor} size={20} />
  ),
};

export default withNavigationFocus(Dashboard);
