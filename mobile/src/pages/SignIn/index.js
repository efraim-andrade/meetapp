import React, { useRef, useState } from 'react';

import { Background } from '~/components';
import LogoImage from '~/assets/img/logo.png';

import { Container, Logo, Form, FormInput } from './styles';

export default function SignIn() {
  const passwordRef = useRef();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSubmit() {}

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
        </Form>
      </Container>
    </Background>
  );
}
