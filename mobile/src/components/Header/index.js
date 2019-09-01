import React from 'react';
import { StatusBar } from 'react-native';

import { Container, Logo } from './styles';

export default function Header() {
  return (
    <>
      <StatusBar backgroundColor="#191620" />

      <Container>
        <Logo />
      </Container>
    </>
  );
}
