import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Background } from '~/components';
import LogoImage from '~/assets/img/logo.png';
import { signInRequest } from '~/store/modules/auth/actions';

import {
  Container,
  Logo,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignText,
} from './styles';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <Logo source={LogoImage} />

        <Form>
          <FormInput
            value={email}
            autoCorrect={false}
            returnKeyType="next"
            autoCapitalize="none"
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="Digite seu e-mail"
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            secureTextEntry
            value={password}
            ref={passwordRef}
            returnKeyType="send"
            onChangeText={setPassword}
            onSubmitEditing={handleSubmit}
            placeholder="Sua senha secreta"
          />

          <SubmitButton onPress={handleSubmit}>Entrar</SubmitButton>

          <SignLink
            onPress={() => navigation.navigate('SignUp')}
            loading={loading}
          >
            <SignText>Criar conta grátis</SignText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
