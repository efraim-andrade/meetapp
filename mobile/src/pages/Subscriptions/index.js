import React from 'react';
import { View } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

function Subscriptions() {
  return <View />;
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" color={tintColor} size={20} />
  ),
};

export default withNavigationFocus(Subscriptions);
