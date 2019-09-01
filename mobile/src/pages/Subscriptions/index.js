import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';
import { Background, Header, Card } from '~/components';
import { subscriptionsRequest } from '~/store/modules/subscriptions/actions';

import { Container, Meetups } from './styles';

function Subscriptions() {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.subscriptions.data);

  async function handleCancel(id) {
    try {
      await api.delete(`subscriptions/${id}`);

      dispatch(subscriptionsRequest());
    } catch (error) {
      console.tron.log(error.message);
      Alert.alert('Algo deu errado tente novamente!');
    }
  }

  return (
    <Background>
      <Header />

      <Container>
        <Meetups
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Card {...item} cancel onPress={handleCancel} />
          )}
        />
      </Container>
    </Background>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" color={tintColor} size={20} />
  ),
};

export default withNavigationFocus(Subscriptions);
