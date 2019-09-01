import React, { useState } from 'react';
import * as Yup from 'yup';
import { withNavigationFocus } from 'react-navigation';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';
import { Background, Header } from '~/components';

import {
  Container,
  Form,
  InputComponent,
  Hr,
  ButtonComponent,
  ButtonExit,
} from './styles';

const schema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email('E-mail inválido!'),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword, field) =>
    oldPassword
      ? field
          .required('Preencha a nova senha')
          .min(6, 'Necessário no mínimo 6 caracteres')
      : field
  ),
  passwordConfirm: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required('Preencha a nova senha')
          .oneOf([Yup.ref('password')], 'Senhas não estão iguais!')
      : field
  ),
});

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.profile);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [errors, setErrors] = useState([]);

  function handleError(field) {
    const fieldError = errors.filter(error => error.path === field);

    return fieldError[0];
  }

  async function handleSubmit() {
    const formData = {
      name,
      email,
      oldPassword,
      password,
      passwordConfirm,
    };

    try {
      await schema.validate(formData, {
        abortEarly: false,
        stripUnknown: true,
      });

      dispatch(updateProfileRequest(formData));

      setErrors([]);
    } catch (error) {
      setErrors(error.inner);
    }
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Header />

      <Container>
        <Form>
          <InputComponent
            value={name}
            onChangeText={setName}
            errorMessage={handleError('name') && handleError('name').message}
          />

          <InputComponent
            value={email}
            onChangeText={setEmail}
            errorMessage={handleError('email') && handleError('email').message}
          />

          <Hr />

          <InputComponent
            value={oldPassword}
            placeholder="Senha atual"
            onChangeText={setOldPassword}
            errorMessage={
              handleError('oldPassword') && handleError('oldPassword').message
            }
          />

          <InputComponent
            value={password}
            placeholder="Nova senha"
            onChangeText={setPassword}
            errorMessage={
              handleError('password') && handleError('password').message
            }
          />

          <InputComponent
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            placeholder="Confirmação de senha"
            errorMessage={
              handleError('passwordConfirm') &&
              handleError('passwordConfirm').message
            }
          />

          <ButtonComponent onPress={handleSubmit}>
            Salvar perfil
          </ButtonComponent>
        </Form>

        <ButtonExit onPress={handleSignOut}>Sair do Meetapp</ButtonExit>
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
