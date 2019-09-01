import React, { useState } from 'react';
// import * as Yup from 'yup';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Background, Header } from '~/components';

import {
  Container,
  Form,
  InputComponent,
  Hr,
  ButtonComponent,
  ButtonExit,
} from './styles';

function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  return (
    <Background>
      <Header />

      <Container>
        <Form>
          <InputComponent value={name} onChange={setName} />
          <InputComponent value={email} onChange={setEmail} />

          <Hr />

          <InputComponent value={oldPassword} onChange={setOldPassword} />
          <InputComponent value={password} onChange={setPassword} />
          <InputComponent value={newPassword} onChange={setNewPassword} />

          <ButtonComponent>Salvar perfil</ButtonComponent>
        </Form>

        <ButtonExit>Sair do Meetapp</ButtonExit>
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
