import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Background } from '~/components';
import LogoImage from '~/assets/img/logo.png';
import { signUpRequest } from '~/store/modules/auth/actions';

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
  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Background>
      <Container>
        <Logo source={LogoImage} />

        <Form>
          <FormInput
            value={name}
            autoCorrect={false}
            returnKeyType="next"
            autoCapitalize="words"
            onChangeText={setName}
            placeholder="Nome completo"
            onSubmitEditing={() => emailRef.current.focus()}
          />

          <FormInput
            value={email}
            ref={emailRef}
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

          <SubmitButton onPress={handleSubmit}>Criar Conta</SubmitButton>

          <SignLink onPress={() => navigation.navigate('SignIn')}>
            <SignText>Já tenho login</SignText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
